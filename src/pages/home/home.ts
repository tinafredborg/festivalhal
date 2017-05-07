import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { LoginPage } from "./log-in/log-in";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  onlogin(form: NgForm){
    console.log (form.value);
  }
  onOpret(){
    this.navCtrl.push(LoginPage);
  }

}
