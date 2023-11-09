import { User } from './user';

export class Paciente extends User {
  ObraSocial: string = '';
  imagenPerfil2: string = '';
  userType: 'Paciente';
}
