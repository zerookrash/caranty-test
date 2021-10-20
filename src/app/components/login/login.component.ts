import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serveces/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private route: Router) {}

  Ingresar() {
    console.log(this.userData);

    const { email, password } = this.userData;
    this.authService.login(email, password).then((res: any) => {
      if (!res) {
        alert('Usuario invalido.');
      } else {
        localStorage.setItem('user', JSON.stringify(res?.user));
        this.route.navigate(['/admin/tasks']);
      }
    });
  }
}
