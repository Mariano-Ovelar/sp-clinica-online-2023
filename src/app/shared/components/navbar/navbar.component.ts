import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  verNavLink: boolean = true;
  showInfoBox: boolean = false;
  links: { nombre: string; url: string; userType: string }[];
  toggleInfoBox(): void {
    this.showInfoBox = !this.showInfoBox;
  }
  constructor(public authSrv: AuthService, private utilsSrv: UtilsService) {}

  ngOnInit() {
    this.links = [
      {
        nombre: 'Seccion Usuarios',
        url: '/admin/seccion-usuarios',
        userType: 'Admin',
      },
    ];
  }
  mostrarNavLink() {
    this.verNavLink = !this.verNavLink;
  }

  logout() {
    this.utilsSrv.spinnerActivardo = true;
    this.authSrv.logout().then(() => {
      setTimeout(() => {
        this.toggleInfoBox();
        this.utilsSrv.routerLink('/auth/login');
        this.utilsSrv.spinnerActivardo = false;
      }, 1000);
    });
  }
}
