import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroTipoUsuarioPipe } from './filtro-tipo-usuario.pipe';

@NgModule({
  declarations: [FiltroTipoUsuarioPipe],
  exports: [FiltroTipoUsuarioPipe],
  imports: [CommonModule],
})
export class PipesModule {}
