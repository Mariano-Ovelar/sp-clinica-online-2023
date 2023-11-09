import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tipoEspecialista } from 'src/app/core/enum/enumEspecialista';
import { Alert } from 'src/app/core/models/alert';
import { Especialista } from 'src/app/core/models/especialista';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-formulario-especialista',
  templateUrl: './formulario-especialista.component.html',
  styleUrls: ['./formulario-especialista.component.scss'],
})
export class FormularioEspecialistaComponent {
  imgFile: any;
  especialistas: string[];
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
    especialidades: new FormControl(),
    imagenPerfil: new FormControl(null, [Validators.required]),
    userType: new FormControl('Especialista', [Validators.required]),
    cuentaVerificada: new FormControl(false, [Validators.required]),
    emailVerificado: new FormControl(false, [Validators.required]),
  });
  @Output() formulario = new EventEmitter<any>();
  constructor(private storageSrv: StorageService) {
    this.especialistas = Object.values(tipoEspecialista);
    this.form.get('especialidades')?.addValidators(Validators.required);
  }
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
  async signUp() {
    if (this.form.valid) {
      let theForm = this.form.value;
      theForm.imagenPerfil = await this.storageSrv.guardarImg(
        theForm.imagenPerfil
      );
      this.formulario.emit(theForm as Especialista);
    }
  }
  selectedValues: any[] = [];
  toggleSelection(item: any) {
    const index = this.selectedValues.indexOf(item);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(item);
    }
    this.form.controls.especialidades.setValue(this.selectedValues);
  }
}
