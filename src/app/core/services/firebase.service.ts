import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: Firestore) {}
  dato: any;
  async addDoc(key: string, obj: any) {
    return await addDoc(collection(this.db, key), obj);
  }

  async getUser(key: string, email: string) {
    const q = query(collection(this.db, key), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    const users: any[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    return users;
  }

  getAll(key: string): Observable<any[]> {
    return collectionData(collection(this.db, key), {
      idField: 'id',
    }) as Observable<any[]>;
  }

  async modificar(obj: any, objModificado: any, coleccion: string) {
    const col = collection(this.db, coleccion);
    const docRef = doc(col, obj.id); // Suponiendo que 'obj' tiene una propiedad 'id'

    // Actualizar el documento con los datos del contenedor modificado
    setDoc(docRef, objModificado, { merge: true });
  }

  getDoc(pathSegments: any, coleccion: string) {
    const col = collection(this.db, coleccion);
    return doc(col, pathSegments);
  }
  async setUserById(user, coleccion: string) {
    const col = collection(this.db, coleccion);

    return setDoc(doc(col, user.id), user);
  }
}
