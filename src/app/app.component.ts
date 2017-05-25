import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/program/program';

import { AuthService } from '../services/auth';
import firebase from 'firebase';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  programPage = ProgramPage;
  isAuthenticated = false;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
              private authService: AuthService, public alertCtrl: AlertController, public push: Push) {

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
        this.rootPage = ProgramPage;
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
      this.pushsetup();
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

  /*function for push-notifications*/
  pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '66471985496'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };
 
  const pushObject: PushObject = this.push.init(options);
 
 /*If the app is running in the foreground, the notification will be dislpayed as an alert instead of a push*/
 pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
      });
      youralert.present();
    }
  });
 
  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
  });
 
  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }

}
