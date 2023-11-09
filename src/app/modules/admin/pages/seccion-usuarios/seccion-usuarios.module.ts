import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionUsuariosRoutingModule } from './seccion-usuarios-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoUserModule } from 'src/app/shared/components/listado/listado-user/listado-user.module';
import { SeccionUsuariosComponent } from './seccion-usuarios.component';
import { DetalleAdminModule } from 'src/app/shared/components/detalles/detalle-admin/detalle-admin.module';
import { DetalleEspecialistaModule } from 'src/app/shared/components/detalles/detalle-especialista/detalle-especialista.module';
import { DetallePacienteModule } from 'src/app/shared/components/detalles/detalle-paciente/detalle-paciente.module';
import { FormularioAdminModule } from 'src/app/shared/components/form/formulario-admin/formulario-admin.module';

@NgModule({
  declarations: [SeccionUsuariosComponent],
  imports: [
    CommonModule,
    SeccionUsuariosRoutingModule,
    FormsModule,
    ListadoUserModule,
    DetalleAdminModule,
    DetalleEspecialistaModule,
    DetallePacienteModule,
    FormularioAdminModule,
  ],
})
export class SeccionUsuariosModule {}
