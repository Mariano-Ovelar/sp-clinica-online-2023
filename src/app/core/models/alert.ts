import Swal from 'sweetalert2';

/* ICONOS */
/* 
success		éxito
error	    error
warning	    advertencia
info	    información
question    pregunta
*/
export class Alert {
  static mensajeConfirmacion(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500,
      allowOutsideClick: false,
    });
  }
  static mensajeError(title: string, text: string, footer?: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      footer: footer,
      allowOutsideClick: false,
    });
  }
  static mensajeAviso(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: title,
      showConfirmButton: false,
      timer: 1500,
      allowOutsideClick: false,
    });
  }
  static mensajeAdvertecia(
    title: string,
    text: string,
    confirmButtonText: string
  ) {
    return Swal.fire({
      title: title,
      showCancelButton: true,
      text: text,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      allowOutsideClick: false,
    });
  }

  static cargando(title: string, timer: number) {
    return Swal.fire({
      title: title,
      timer: timer,
      /*  timerProgressBar: true, */
      didOpen: () => {
        Swal.showLoading();
      },

      allowOutsideClick: false,
    });
  }
}
