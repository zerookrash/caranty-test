import { Component } from '@angular/core';
import { AuthService } from './serveces/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  Ingresar() {
    console.log(this.user);

    const { email, password } = this.user;
    this.authService.login(email, password).then((res) => {
      console.log('Se registro: ', res);
    });
  }

  ObtenerUsuario() {
    this.authService.getUserLogged().subscribe((res) => {
      console.log(res?.email);
    });
  }
  logout() {
    this.authService.logout();
  }
}
