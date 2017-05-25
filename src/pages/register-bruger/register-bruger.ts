import { Component } from '@angular/core';
import { NgForm } from'@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register-bruger',
  templateUrl: 'register-bruger.html',
})
export class RegisterBrugerPage {
  password: any;
  confirmPassword: any;
  constructor(private authService: AuthService, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController){}

  onOpret(form: NgForm){

    if(form.value.password != form.value.confirmPassword){

      const alert = this.alertCtrl.create({
        title: 'adgangskode passer ikke sammen',
        buttons: ['ok!']
      });
      alert.present();

     } else{
      const loading = this.loadingCtrl.create({
        content: 'Du bliver registeret...'
      });
      loading.present();
      this.authService.opret( form.value.email, form.value.password)
        .then(data => {
          loading.dismiss();
        })
        .catch(error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'registering mislykkedes',
            message: error.message,
            buttons: ['ok!']
          });
          alert.present();
        });
    }

    }
}
