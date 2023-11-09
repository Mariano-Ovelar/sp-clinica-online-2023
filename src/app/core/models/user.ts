/* export interface IUser {
  uid: string;
  name: string;
  lastName: string;
  edad: number;
  email: string;
  password?: string;
  dni: number;
  emailVerificado: boolean;
  imagenPerfil: string;
}
 */
export class User {
  uid: string;
  name: string;
  lastName: string;
  email: string;
  password?: string;
  edad: number;
  dni: number;
  tipoUser: string;
  emailVerificado: boolean;
  imagenPerfil: string;

  public static GetLoggedUser(listaUser: any[], user: any) {
    const userEncontrado: User = listaUser.find(
      (item: any) => item.uid === user.user.uid
    );
    return userEncontrado;
  }
}
