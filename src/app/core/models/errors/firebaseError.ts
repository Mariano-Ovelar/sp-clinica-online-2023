export class ErrorEmailPassword extends Error {
  title = 'Error al tratar de entrar:';
  constructor() {
    super('Revise si el correo o la contraseña estan bien.');
    this.name = 'EmailPasswordError'; // Puedes personalizar el nombre del error
  }
}
export class ErrorPermisoAdmin extends Error {
  title = 'Error al tratar de entrar:';
  constructor() {
    super('Su cuenta no tiene permiso del admin.');
    this.name = 'PermisoAdminError'; // Puedes personalizar el nombre del error
  }
}
export class ErrorEmailVerified extends Error {
  title = 'Cuenta no verificada:';
  constructor() {
    super('Verificada la cuenta en tu correo.');
    this.name = 'ErrorEmailVerified'; // Puedes personalizar el nombre del error
  }
}
