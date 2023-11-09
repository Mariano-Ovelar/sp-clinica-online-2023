import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Alert } from 'src/app/core/models/alert';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  usuarioStorage: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private userSrv: AuthService,
    public utilsSrv: UtilsService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  async login() {
    this.utilsSrv.spinnerActivardo = true;
    await this.userSrv
      .signIn(this.form.value)
      .then(() => {
        console.log(`Login`);
        this.utilsSrv.routerLink('/');
        Alert.mensajeConfirmacion(
          `Bienvenido ${this.userSrv.user.name}!!!!!!!!`
        );
      })
      .catch((err: any) => {
        console.log(err);
        Alert.mensajeError(err.title, err.message);
      })
      .finally(() => {
        this.utilsSrv.spinnerActivardo = false;
      });
  }

  cargarEmpleado() {
    this.form.get('email')?.setValue(this.especialista.email);
    this.form.get('password')?.setValue(this.especialista.passwod);
  }
  cargarAdmin() {
    this.form.get('email')?.setValue(this.admin.email);
    this.form.get('password')?.setValue(this.admin.passwod);
  }
  cargarPaciente() {
    this.form.get('email')?.setValue(this.paciente.email);
    this.form.get('password')?.setValue(this.paciente.passwod);
  }
  especialista = {
    email: 'carlos@carlos.com',
    passwod: '123456',
  };
  admin = {
    email: 'marianoovelar200@gmail.com',
    passwod: '123456',
  };
  paciente = {
    email: 'mario@mario.com',
    passwod: '123456',
  };
}
