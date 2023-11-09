import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEspecialistaComponent } from './formulario-especialista.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioEspecialistaComponent],
  exports: [FormularioEspecialistaComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormularioEspecialistaModule {}
