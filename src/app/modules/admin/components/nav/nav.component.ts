import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serveces/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  userLogged = this.auth.getUserLogged();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
