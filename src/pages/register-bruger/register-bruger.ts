import { Component } from '@angular/core';
import { NgForm } from'@angular/forms';
@Component({
  selector: 'page-register-bruger',
  templateUrl: 'register-bruger.html',
})
export class RegisterBrugerPage {

  onSignup(form: NgForm){
    console.log(form.value);
  }

}
