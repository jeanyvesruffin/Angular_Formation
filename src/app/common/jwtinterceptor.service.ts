import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthentificationService} from "../login/authentification.service";

@Injectable()
export class JWTInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthentificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwToken = this.authService.jwt;
    const clone = req.clone({setHeaders: {Authorization: `Bearer ${jwToken}`}});
    return next.handle(clone);
  }


}
