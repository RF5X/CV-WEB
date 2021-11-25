import { Router } from '@angular/router';
import { AuthResponseData, LoggingService } from './logging.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  isLoginMode = true;
  error: string;
  constructor(private loggingService: LoggingService, private router : Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);

  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    let loggingObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {

      loggingObs = this.loggingService.iniciarsesion(email, password);

    } else {

      // loggingObs = this.loggingService.crearcuenta(email, password);

    }

    loggingObs.subscribe(resData => {
      console.log(resData);
      this.router.navigate(['']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
    });
    form.reset();
  }

}
