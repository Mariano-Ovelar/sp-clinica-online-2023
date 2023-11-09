import { Component } from '@angular/core';
import { Alert } from './core/models/alert';
import { StorageService } from './core/services/storage.service';
import { AuthService } from './core/services/auth.service';
import { UtilsService } from './core/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public utilsSrv: UtilsService) {}
}
