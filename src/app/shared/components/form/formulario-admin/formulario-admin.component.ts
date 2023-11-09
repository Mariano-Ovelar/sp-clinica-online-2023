import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-formulario-admin',
  templateUrl: './formulario-admin.component.html',
  styleUrls: ['./formulario-admin.component.scss'],
})
export class FormularioAdminComponent {
  imgFile: any;
  imgForm: string = '../../../../../assets/img/perfil.jpg';

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
    imagenPerfil: new FormControl(null, [Validators.required]),
    cuentaVerificada: new FormControl(true, [Validators.required]),
    emailVerificado: new FormControl(false, [Validators.required]),
    userType: new FormControl('Admin', [Validators.required]),
  });
  @Output() formulario = new EventEmitter<any>();
  constructor(private storageSrv: StorageService) {}

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
  async signUp() {
    if (this.form.valid) {
      let theForm = this.form.value;
      theForm.imagenPerfil = await this.storageSrv.guardarImg(
        theForm.imagenPerfil
      );
      this.formulario.emit(theForm);
    }
  }
  clickImg(id: string) {
    var botonInvisible = document.getElementById(id);
    botonInvisible.click();
  }
}
