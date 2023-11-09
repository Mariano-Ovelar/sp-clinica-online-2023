import { Component, Input } from '@angular/core';
import { Especialista } from 'src/app/core/models/especialista';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-detalle-especialista',
  templateUrl: './detalle-especialista.component.html',
  styleUrls: ['./detalle-especialista.component.scss'],
})
export class DetalleEspecialistaComponent {
  @Input() usuario?: Especialista;

  constructor(private AuthSrv: AuthService) {}
  habilitar() {
    if (this.usuario) {
      const copiedObj: Especialista = { ...this.usuario };
      copiedObj.cuentaVerificada = true;
      this.AuthSrv.modificar(this.usuario, copiedObj);
      this.usuario.cuentaVerificada = true;
    }
  }
  inhabilitar() {
    if (this.usuario) {
      const copiedObj: Especialista = { ...this.usuario };
      copiedObj.cuentaVerificada = false;
      this.AuthSrv.modificar(this.usuario, copiedObj);
      this.usuario.cuentaVerificada = false;
    }
  }
}
