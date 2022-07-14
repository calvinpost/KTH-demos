import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager-ng';

  principal: User;

  constructor(private authServ: AuthService){}

  getPrincipal(){
    this.principal = this.authServ.principal;
  }
}
