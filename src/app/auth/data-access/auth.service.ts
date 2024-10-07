import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from '@angular/fire/auth';

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
      if (error.code === 'auth/email-already-in-use') {
        console.error('El correo electrónico ya está en uso.');
        // Aquí puedes mostrar un mensaje amigable al usuario
        throw new Error('El correo electrónico ya está en uso. Por favor, utiliza otro.');
      } else {
        console.error('Error en el registro de usuario:', error);
        throw error; // Mantén otros errores sin cambios
      }
    });
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    ).catch((error) => {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    });
  }

  signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider);
  }
}
