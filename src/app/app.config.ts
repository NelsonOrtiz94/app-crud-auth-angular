import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ng-task-18-bf043","appId":"1:27434260513:web:b8b4155b68e8032c63eb60","storageBucket":"ng-task-18-bf043.appspot.com","apiKey":"AIzaSyDN8SWwYWRzE4EoRZJQYq0wkRP_yt1Zz_E","authDomain":"ng-task-18-bf043.firebaseapp.com","messagingSenderId":"27434260513"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
