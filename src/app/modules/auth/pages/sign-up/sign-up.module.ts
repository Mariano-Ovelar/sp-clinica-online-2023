import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioEspecialistaModule } from 'src/app/shared/components/form/formulario-especialista/formulario-especialista.module';
import { FormularioPacienteModule } from 'src/app/shared/components/form/formulario-paciente/formulario-paciente.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    FormularioEspecialistaModule,
    FormularioPacienteModule,
  ],
})
export class SignUpModule {}
