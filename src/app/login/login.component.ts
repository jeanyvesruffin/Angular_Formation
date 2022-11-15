import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required,no$InPassword]),
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm)
  }
}

function no$InPassword(c: AbstractControl): ValidationErrors | null {
  if ((c.value as string).indexOf('$') < 0) {
    return null;
  }

  return {
    no$InPassword: 'Il n\'y a pas de $ dans le mot de passe'
  }
}
