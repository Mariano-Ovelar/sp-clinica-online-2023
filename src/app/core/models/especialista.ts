import { tipoEspecialista } from '../enum/enumEspecialista';
import { User } from './user';

export class Especialista extends User {
  especialidades?: tipoEspecialista[];
  userType: 'Especialista';
  cuentaVerificada: boolean;
}
