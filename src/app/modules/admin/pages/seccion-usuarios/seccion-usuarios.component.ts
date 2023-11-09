import { Component } from '@angular/core';
import { Alert } from 'src/app/core/models/alert';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-seccion-usuarios',
  templateUrl: './seccion-usuarios.component.html',
  styleUrls: ['./seccion-usuarios.component.scss'],
})
export class SeccionUsuariosComponent {
  usuarioAtrapado?: any;
  tipoUsuarioSeleccionado: string = '';
  constructor(private userSrv: AuthService, private utilsSrv: UtilsService) {}

  hideForm: boolean = false;
  mostrarForm() {
    this.hideForm = true;
  }
  ocultarForm() {
    this.hideForm = false;
  }

  async signUp(form) {
    this.utilsSrv.spinnerActivardo = true;
    if (form) {
      await this.userSrv
        .signUp(form)
        .then(async () => {
          Alert.mensajeConfirmacion(`Se a registrado exitosamente!!!!!!!!`);
          console.log(`Registro`);
          this.hideForm = false;
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
}
