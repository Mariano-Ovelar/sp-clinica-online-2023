import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePacienteComponent } from './detalle-paciente.component';

@NgModule({
  declarations: [DetallePacienteComponent],
  exports: [DetallePacienteComponent],
  imports: [CommonModule],
})
export class DetallePacienteModule {}
