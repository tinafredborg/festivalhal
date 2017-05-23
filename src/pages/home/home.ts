import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import { RegisterBrugerPage } from "../register-bruger/register-bruger";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController,) {
  }
  onlogin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'du logges ind...'
    });
    loading.present();
    this.authService.login( form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'log ind mislykket',
          message: error.message,
          buttons: ['ok!']
        });
        alert.present();
      });

  }
  onOpret(){
    this.navCtrl.push(RegisterBrugerPage);
  }

}

