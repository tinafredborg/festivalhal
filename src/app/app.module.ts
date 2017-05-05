import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { ProgramPage } from '../pages/program/program';
import { RegisterBrugerPage } from '../pages/register-bruger/register-bruger';
import { ReglerPage } from '../pages/regler/regler';
import { SpilPage } from '../pages/spil/spil';
import { LogOutPage } from '../pages/log-out/log-out';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    ProgramPage,
    RegisterBrugerPage,
    ReglerPage,
    SpilPage,
    LogOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    ProgramPage,
    RegisterBrugerPage,
    ReglerPage,
    SpilPage,
    LogOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
