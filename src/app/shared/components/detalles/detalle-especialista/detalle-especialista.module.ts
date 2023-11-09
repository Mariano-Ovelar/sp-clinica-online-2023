import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleEspecialistaComponent } from './detalle-especialista.component';

@NgModule({
  declarations: [DetalleEspecialistaComponent],
  exports: [DetalleEspecialistaComponent],
  imports: [CommonModule],
})
export class DetalleEspecialistaModule {}
