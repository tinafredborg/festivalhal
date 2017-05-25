import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/program/program';
import { RegisterBrugerPage } from '../pages/register-bruger/register-bruger';

import { AuthService } from '../services/auth';

import { Push } from '@ionic-native/push';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramPage,
    RegisterBrugerPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramPage,
    RegisterBrugerPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
