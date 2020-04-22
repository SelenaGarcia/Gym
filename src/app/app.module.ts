import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { registerLocaleData } from '@angular/common';
import localeEsAr from "@angular/common/locales/es-AR";
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from "@ngrx/store";

import { environment } from '../environments/environment';

import { AuthModule } from './auth/auth.module';

import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { UIService } from './shared/ui.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavigationListComponent } from './navigation/navigation-list/navigation-list.component';
import { reducers } from './app.reducer';


registerLocaleData(localeEsAr,'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    NavigationListComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,     
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'},
    AuthService,
    TrainingService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
