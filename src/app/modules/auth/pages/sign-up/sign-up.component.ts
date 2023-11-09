import { Component } from '@angular/core';
import { Alert } from 'src/app/core/models/alert';
import { Paciente } from 'src/app/core/models/paciente';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formularioPaciente: boolean = false;
  formularioEspecialista: boolean = false;
  formElegido: boolean = false;

  constructor(private userSrv: AuthService, private utilsSrv: UtilsService) {}
  ngOnInit() {}
  async signUp(form) {
    this.utilsSrv.spinnerActivardo = true;

    if (form) {
      await this.userSrv
        .signUp(form)
        .then(async () => {
          Alert.mensajeConfirmacion(`Se a registrado exitosamente!!!!!!!!`);
          console.log(`Registro`);
          this.utilsSrv.routerLink('/auth/login');
          this.utilsSrv.spinnerActivardo = false;
        })
        .catch((err) => {
          console.log(err);
          Alert.mensajeError(
            'Error!!!',
            'Puede ser que este correo ya este registrado!!!!'
          );
          this.utilsSrv.spinnerActivardo = false;
        });
    }
  }
  activarForm(form) {
    if (form == 'Paciente') {
      this.formularioPaciente = true;
      this.formElegido = true;
    } else if (form == 'Especialista') {
      this.formularioEspecialista = true;
      this.formElegido = true;
    } else {
      this.formularioEspecialista = false;
      this.formularioPaciente = false;
      this.formElegido = false;
    }
  }
}
