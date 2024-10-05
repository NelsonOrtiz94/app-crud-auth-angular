import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDN8SWwYWRzE4EoRZJQYq0wkRP_yt1Zz_E', // Clave API
        authDomain: 'ng-task-18-bf043.firebaseapp.com', // Dominio de autenticación
        projectId: 'ng-task-18-bf043', // ID del proyecto
        storageBucket: 'ng-task-18-bf043.appspot.com', // Bucket de almacenamiento
        messagingSenderId: '27434260513', // ID del remitente de mensajes
        appId: '1:27434260513:web:b8b4155b68e8032c63eb60', // ID de la aplicación
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
