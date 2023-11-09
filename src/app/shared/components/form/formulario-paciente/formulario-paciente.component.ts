import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'src/app/core/models/alert';
import { Paciente } from 'src/app/core/models/paciente';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss'],
})
export class FormularioPacienteComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    edad: new FormControl(null, [Validators.required]),
    dni: new FormControl(null, [Validators.required]),
    obraSocial: new FormControl('', [Validators.required]),
    imagenPerfil: new FormControl(null, [Validators.required]),
    imagenPerfil2: new FormControl(null, [Validators.required]),
    userType: new FormControl('Paciente', [Validators.required]),
    emailVerificado: new FormControl(false, [Validators.required]),
    cuentaVerificada: new FormControl(true, [Validators.required]),
  });
  spinner: boolean = false;
  imgFile: any;
  imgFile2: any;
  imgForm: string = '../../../../../assets/img/perfil.jpg';
  imgForm2: string = '../../../../../assets/img/perfil.jpg';
  @Output() formulario = new EventEmitter<any>();

  constructor(
    private storageSrv: StorageService,
    private userSrv: AuthService,
    private utilsSrv: UtilsService
  ) {}
  ngOnInit() {}
  clickImg(id: string) {
    var botonInvisible = document.getElementById(id);
    botonInvisible.click();
  }
  capturarFile($event: any) {
    try {
      const file: File = $event.target.files[0];
      const reader = new FileReader();
      this.imgFile = file;

      reader.onload = (e: any) => {
        this.imgForm = e.target.result;
        this.form.controls.imagenPerfil.setValue(this.imgFile);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      alert(err);
    }
  }
  capturarFile2($event: any) {
    try {
      const file: File = $event.target.files[0];
      const reader = new FileReader();
      this.imgFile2 = file;

      reader.onload = (e: any) => {
        this.imgForm2 = e.target.result;
        this.form.controls.imagenPerfil2.setValue(this.imgFile2);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      alert(err);
    }
  }
  async signUp() {
    if (this.form.valid) {
      let theForm = this.form.value;
      theForm.imagenPerfil = await this.storageSrv.guardarImg(
        theForm.imagenPerfil
      );
      theForm.imagenPerfil2 = await this.storageSrv.guardarImg(
        theForm.imagenPerfil2
      );
      this.formulario.emit(theForm as Paciente);
    }
  }
}
