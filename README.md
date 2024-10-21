# Proyecto de Autenticación con Angular y Firebase

Este proyecto demuestra cómo implementar la autenticación de usuarios utilizando Angular y Firebase, aprovechando el servicio de autenticación con Google que ofrece Firebase.

## Tecnologías Utilizadas

- **Angular**: Framework para crear aplicaciones web.
- **Firebase**: Plataforma de desarrollo que proporciona servicios como bases de datos en tiempo real, autenticación y hosting.
- **AngularFire**: Biblioteca para integrar Firebase con Angular.

## Requisitos Previos

- Node.js y npm instalados en tu sistema.
- Angular CLI instalado globalmente.
- Una cuenta de Firebase.

## Configuración del Proyecto

1. **Crear un nuevo proyecto Angular**:

   Abre tu terminal y ejecuta el siguiente comando:

   ```bash
   ng new nombre-del-proyecto
   cd nombre-del-proyecto

2. **Instalar AngularFire y Firebase**:

   Dentro de la carpeta de tu proyecto, ejecuta:
   ```bash
   npm install firebase @angular/fire

3. **Configurar Firebase**:

  - Ve a `Firebase Console`.
  - Crea un nuevo proyecto o selecciona uno existente.
  - En el panel de navegación, selecciona "Authentication" y habilita el método de inicio de sesión con Google.
  - Ve a "Configuración del proyecto" y copia la configuración de Firebase (configuración de la aplicación web).

4. **Agregar la Configuración de Firebase a tu Proyecto**:

    Abre el archivo `src/environments/environment.ts` y agrega tu configuración de Firebase:
   ```bash
   export const environment = {
    production: false,
    firebase: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO_AUTH.firebaseapp.com",
    projectId: "TU_ID_PROYECTO",
    storageBucket: "TU_BUCKET.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
      }
    };
5. **Importar AngularFire en el Módulo Principal**:

    Abre `src/app/app.module.ts` y realiza las siguientes importaciones y configuraciones:
   ```bash
   import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AngularFireModule } from '@angular/fire';
    import { AngularFireAuthModule } from '@angular/fire/auth';
    import { environment } from '../environments/environment';

    @NgModule({
    declarations: [
    // tus componentes
   ],
    imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [/* tu componente principal */]
    })
    export class AppModule { }

# Implementación de la Autenticación con Google

  1. **Crear un Servicio de Autenticación**:
     
     ```bash
     ng generate service auth

  Luego, en src/app/auth.service.ts, agrega el siguiente código:
  
    ```bash
    import { Injectable } from '@angular/core';
    import { AngularFireAuth } from '@angular/fire/auth';
    import firebase from 'firebase/app';

    @Injectable({
    providedIn: 'root'
    })
    export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
    }

    async logout() {
    return await this.afAuth.signOut();
      }
    }

2. **Usar el Servicio en un Componente**:

    En el componente donde deseas implementar la autenticación, inyecta el servicio y llama a los métodos `loginWithGoogle` y `logout`.

     ```bash
     import { Component } from '@angular/core';
     import { AuthService } from './auth.service';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    })
    export class AppComponent {
    constructor(private authService: AuthService) { }

    login() {
    this.authService.loginWithGoogle().then(user => {
      console.log('Usuario autenticado:', user);
      });
    }

    logout() {
    this.authService.logout().then(() => {
      console.log('Usuario desautenticado');
      });
      }
    }

# Ejecución del Proyecto

1. **Ejecutar el Servidor de Desarrollo**:

    En la terminal, ejecuta:
      ```bash
      ng serve

2. **Acceder a la Aplicación**:

   Abre tu navegador y ve a `http://localhost:4200`.

# Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de abrir un issue o enviar un pull request.

# Licencia
Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

```bash

Asegúrate de personalizar los valores de la configuración de Firebase y cualquier otro detalle específico de tu proyecto.
¡Espero que esto te ayude a configurar tu proyecto de Angular y Firebase!
Si tienes más preguntas o necesitas más detalles, no dudes en preguntar.
