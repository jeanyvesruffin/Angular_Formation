import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() {
  }

  authentUser(login: string, password: string): any {
    return {
      userId: 1,
      login: login,
      lastname: 'Ruffin',
      firstname: 'Jean-Yves'
    };
  }
}
