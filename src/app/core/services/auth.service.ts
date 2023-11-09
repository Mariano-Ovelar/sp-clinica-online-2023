import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
} from '@angular/fire/auth';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { User } from '../models/user';
import {
  ErrorPermisoAdmin,
  ErrorEmailPassword,
  ErrorEmailVerified,
} from '../models/errors/firebaseError';

import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { collection, doc } from 'firebase/firestore';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);
  public user = null;
  private paht: string = 'user';

  constructor(
    private utilsSrv: UtilsService,
    private dbSrv: FirebaseService,
    private storage: Storage
  ) {
    this.user = this.getUser();
  }
  async traerIfoUsuari() {
    return await this.dbSrv.getUser(this.paht, this.user.email);
  }

  async signIn(user: User): Promise<void> {
    const userRes: any = await this.dbSrv.getUser(this.paht, user.email);
    if (userRes[0].cuentaVerificada) {
      await signInWithEmailAndPassword(this.auth, user.email, user.password)
        .then(async (userCredential) => {
          if (userRes[0].emailVerificado || userCredential.user.emailVerified) {
            const copiedObj = { ...userRes[0] };
            copiedObj.emailVerificado = true;
            this.modificar(userRes[0], copiedObj);
            this.user = userRes[0];
            this.utilsSrv.setElementInLocalstorage(this.paht, userRes[0]);
          } else {
            this.logout();
            throw new ErrorEmailVerified();
          }
        })
        .catch((e) => {
          console.log(e);
          if (e instanceof ErrorEmailVerified) {
            throw e;
          } else {
            throw new ErrorEmailPassword();
          }
        });
    } else {
      throw new ErrorPermisoAdmin();
    }
  }

  async signUp(user: any): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, user.email, user.password)
      .then(async (userCredential) => {
        user.id = userCredential.user.uid;
        await this.dbSrv.setUserById(user, this.paht);
        this.upDateUser({
          displayName: user.name,
          photoURL: user.imagenPerfil,
        });
        sendEmailVerification(userCredential.user).then(() => {
          this.logout();
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw { errorCode, errorMessage };
      });
  }
  async logout() {
    await signOut(this.auth)
      .then(() => {
        this.utilsSrv.setElementInLocalstorage(this.paht, null);
        this.user = null;
        console.log('Exit');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw { errorCode, errorMessage };
      });
  }

  upDateUser(user: any) {
    const theUser = this.user;
    if (theUser)
      updateProfile(theUser, user)
        .then(() => {
          this.utilsSrv.setElementInLocalstorage(this.paht, theUser);
          this.user = theUser;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          throw { errorCode, errorMessage };
        });
  }

  private getUser(): Observable<any> {
    return this.utilsSrv.getElementInLocalstorage(this.paht);
  }
  getUsuarios(): Observable<any[]> {
    return this.dbSrv.getAll(this.paht);
  }
  async modificar(obj: any, objModificado: any) {
    this.dbSrv.modificar(obj, objModificado, this.paht);
  }
}
