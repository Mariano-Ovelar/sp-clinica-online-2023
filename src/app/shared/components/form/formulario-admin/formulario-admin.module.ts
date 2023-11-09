import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAdminComponent } from './formulario-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioAdminComponent],
  exports: [FormularioAdminComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormularioAdminModule {}
