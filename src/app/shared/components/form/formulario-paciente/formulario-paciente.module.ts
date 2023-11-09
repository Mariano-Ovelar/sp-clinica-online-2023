import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPacienteComponent } from './formulario-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioPacienteComponent],
  exports: [FormularioPacienteComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormularioPacienteModule {}
