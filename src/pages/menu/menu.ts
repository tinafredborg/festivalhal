import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramPage } from '../program/program';
import { SpilPage } from '../spil/spil';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }

  onProgram(){
    this.navCtrl.push(ProgramPage)
  }
  onStart(){
    this.navCtrl.push(SpilPage)
  }


}
