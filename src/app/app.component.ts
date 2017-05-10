import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LogOutPage } from '../pages/log-out/log-out';
import { ProgramPage } from '../pages/program/program';
import { MenuPage } from '../pages/menu/menu';
import { ReglerPage } from '../pages/regler/regler';
import { SpilPage } from '../pages/spil/spil';
import { AuthService } from '../services/auth';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  logoutPage = LogOutPage;
  programPage = ProgramPage;
  menuPage = MenuPage;
  reglerPage = ReglerPage;
  spilPage = SpilPage;
  isAuthenticated = false;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
              private authService: AuthService) {

    firebase.initializeApp({
      apiKey: "AIzaSyAHuZ8O6Be_Hn470TLYKkkroaHldjDoHyE",
      authDomain: "festivalhal-2afcb.firebaseapp.com",
      databaseURL: "https://festivalhal-2afcb.firebaseio.com",
      projectId: "festivalhal-2afcb",
      storageBucket: "festivalhal-2afcb.appspot.com",
      messagingSenderId: "66471985496"
    });
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        this.rootPage = MenuPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = HomePage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(HomePage);
    }

}
