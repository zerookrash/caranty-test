import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serveces/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  Registrar() {
    console.log(this.user);

    const { email, password } = this.user;
    this.authService.register(email, password).then((res) => {
      console.log('Se registro: ', res);
    });
  }

  ObtenerUsuario() {
    this.authService.getUserLogged().subscribe((res) => {
      console.log(res?.email);
    });
  }
}
