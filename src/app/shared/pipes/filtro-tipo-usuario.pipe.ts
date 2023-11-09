import { Pipe, PipeTransform, inject } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';

@Pipe({
  name: 'filtroTipoUsuario',
})
export class FiltroTipoUsuarioPipe implements PipeTransform {
  constructor() {}
  transform(usuarios: any[], tipoUsuarioSeleccionado: string): any[] {
    if (!tipoUsuarioSeleccionado || tipoUsuarioSeleccionado === '') {
      return usuarios; // Retorna todos los usuarios si no se selecciona un tipo de usuario
    }
    return usuarios.filter(
      (usuario) => usuario.userType === tipoUsuarioSeleccionado
    );
  }
}
