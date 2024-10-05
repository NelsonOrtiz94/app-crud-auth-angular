import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = inject(Auth);

  signUp(user: User) {
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    ).catch((error) => {
      console.error('Error en el registro de usuario:', error);
      throw error; // Lanzar el error para manejarlo en el componente
    });
  }  

  signIn(user: User) { // Acepta un parámetro de tipo User
    return signInWithEmailAndPassword(this._auth, user.email, user.password)
      .catch((error) => {
        console.error('Error en el inicio de sesión:', error);
        throw error; // Lanzar el error para manejarlo en el componente
      });
  }
}
