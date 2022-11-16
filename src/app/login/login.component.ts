import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthentificationService} from "./authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorLogin = {
    required: 'Valeur obligatoire',
    minlength: '3 caractères sont obligatoire'
  }
  errorPassword = {
    required: 'Valeur obligatoire',
    no$InPassword: 'Vous ne pouvez pas utiliser le caractère $'
  }


  loginForm: FormGroup;

  constructor(private authent: AuthentificationService, private router: Router) {
    this.authent.disconnect();
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, no$InPassword]),
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm)
    console.log('submit', this.loginForm.value);
    const user = this.authent.authentUser(this.loginForm.value.login,
      this.loginForm.value.password);
    console.log('authent.authentUser', user);
    if (user) {
      this.router.navigateByUrl('/home');
    }
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
