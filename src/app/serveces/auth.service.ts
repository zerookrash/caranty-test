import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(private auth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      let user: any;
      return (user = await this.auth.signInWithEmailAndPassword(
        email,
        password
      ));
    } catch (e) {
      console.log(`Error!!! ${e}`);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(`Error!!! ${e}`);
      return null;
    }
  }

  getUserLogged() {
    return this.auth.authState;
  }

  logout() {
    this.auth.signOut();
  }
}
