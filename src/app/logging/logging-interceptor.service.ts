import { LoggingService } from './logging.service';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { take, exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {

  constructor(private loggingService: LoggingService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("dentro")
    return this.loggingService.user.pipe(take(1),
      exhaustMap(user => {

        if (!user) {
          console.log("no usuario")
          return next.handle(req);

        }
        console.log("con usuario")
        const modifiedReq = req.clone({ params: new HttpParams().set('auth', user.token) });
        console.log(modifiedReq)
        return next.handle(modifiedReq);

      }))
  }
}



// if (!user) {
//   console.log("no usuario")
//   return next.handle(req);

// }


// intercept(req: HttpRequest<any>, next: HttpHandler){
  // return this.loggingService.user.pipe(take(1),
  // exhaustMap(user =>{

  //   if(!user){
  //     return next.handle(req);
  //   }
  //   const modifiedReq = req.clone({params: new HttpParams().set('auth',user.token)});
  //   console.log(modifiedReq)
  //   return next.handle(modifiedReq);

//   }))


// }
