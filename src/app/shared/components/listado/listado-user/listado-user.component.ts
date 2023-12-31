import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-listado-user',
  templateUrl: './listado-user.component.html',
  styleUrls: ['./listado-user.component.scss'],
})
export class ListadoUserComponent {
  usuarios: any;
  @Input() tipoUsuarioSeleccionado: string = '';
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  constructor(private userSrc: AuthService) {}
  ngOnInit(): void {
    this.userSrc.getUsuarios().subscribe((res) => {
      this.usuarios = res;
    });
  }
  selecionar(obj: any) {
    this.usuarioSeleccionado.emit(obj);
  }
}
