import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let utils = inject(UtilsService);
  let auth = inject(AuthService);
  let respuesta = auth.user !== null && auth.user.userType === 'Admin';
  if (!respuesta) {
    utils.routerLink('/');
  }
  return respuesta;
};
