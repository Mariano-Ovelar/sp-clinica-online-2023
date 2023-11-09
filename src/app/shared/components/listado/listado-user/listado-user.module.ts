import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUserComponent } from './listado-user.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [ListadoUserComponent],
  exports: [ListadoUserComponent],
  imports: [CommonModule, FormsModule, PipesModule],
})
export class ListadoUserModule {}
