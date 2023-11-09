import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleAdminComponent } from './detalle-admin.component';

@NgModule({
  declarations: [DetalleAdminComponent],
  exports: [DetalleAdminComponent],
  imports: [CommonModule],
})
export class DetalleAdminModule {}
