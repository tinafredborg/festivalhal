import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ProgramPage } from '../pages/program/program';
import { RegisterBrugerPage } from '../pages/register-bruger/register-bruger';
import { ReglerPage } from '../pages/regler/regler';
import { SpilPage } from '../pages/spil/spil';

import { AuthService } from '../services/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProgramPage,
    RegisterBrugerPage,
    ReglerPage,
    SpilPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ProgramPage,
    RegisterBrugerPage,
    ReglerPage,
    SpilPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
