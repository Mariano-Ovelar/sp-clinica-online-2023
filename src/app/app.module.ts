import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
/* import { PipesModule } from './shared/pipes/pipes.module'; */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NavbarModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clinica-on-line-sp-2023',
        appId: '1:139997683592:web:dffffd70d4a3952269643d',
        storageBucket: 'clinica-on-line-sp-2023.appspot.com',
        apiKey: 'AIzaSyDA5oE6xCZOqfjhRhRgSLDhzVzAi8ktjeg',
        authDomain: 'clinica-on-line-sp-2023.firebaseapp.com',
        messagingSenderId: '139997683592',
      })
    ),
    SpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
