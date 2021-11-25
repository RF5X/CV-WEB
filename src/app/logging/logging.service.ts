import { Router } from '@angular/router';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";



export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localid: string;
  //si no es necesario añadir?
  registred?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoggingService {

  private API_KEY = "AIzaSyAwvDxsqsSC82vlXbQsTLGZNq08tpcgx6o"
  private URL_crearcuenta = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
  private URL_iniciosesion = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="

  private tokenExpirationTimer: any;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }


  // crearcuenta(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(this.URL_crearcuenta + this.API_KEY, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }).pipe(catchError(this.controlError),
  //     tap(resData => {
  //       this.controlAutentificado(
  //         resData.email,
  //         resData.localid, //userID
  //         resData.idToken, //token
  //         +resData.expiresIn);
  //     }
  //     )
  //   )
  // }

  iniciarsesion(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.URL_iniciosesion + this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(this.controlError),
        tap(resData => {
          this.controlAutentificado(
            resData.email,
            resData.localid, //userID
            resData.idToken, //token
            +resData.expiresIn);
        }
        )
      )
  }

  autologgin() {
    const userData:
      {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    console.log("autologin inicio de sesión " +  userData._tokenExpirationDate);
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {

      this.user.next(loadedUser);
      let a = new Date().getTime();
      let b = new Date(userData._tokenExpirationDate).getTime()
      let c = (b-a);
      // const expirationDuration =  new Date (new Date().getTime() - new Date(userData._tokenExpirationDate).getTime()) ;
      let d = new Date(new Date().getTime() + c );
      console.log(a+"    "+b+"    "+c+"   "+d);

      this.autologout(c);
    }
  }


  private controlAutentificado(email: string, userId: string, token: string, expiresIn: number) {

    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000 );
    console.log(expirationDate);
    const user = new User(
      email,
      userId,
      token,
      expirationDate);

    this.user.next(user);
    console.log(user);
    //expiresIn * 1000
    this.autologout(expiresIn * 1000); //en milisegundos
    localStorage.setItem('userData', JSON.stringify(user));
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/logeo']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
      this.tokenExpirationTimer = null;

  }

  autologout(expirationDuration: number) {
    console.log("1 "+this.tokenExpirationTimer)
    this.tokenExpirationTimer = setTimeout(() =>{ this.logout(); }, expirationDuration) // expirationDuration
    console.log("2 "+this.tokenExpirationTimer);
  }

  private controlError(errorRes: HttpErrorResponse) {
    let errorMessage = "Error desconocido"
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "correo existente";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "correo no encontrado";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "contraseña invalida";
        break;
      case 'USER_DISABLED':
        errorMessage = "cuenta desactivada";
        break;
    }
    return throwError(errorMessage);
  }



}
