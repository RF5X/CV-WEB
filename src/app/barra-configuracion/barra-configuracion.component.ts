import { LoggingService } from './../logging/logging.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-configuracion',
  templateUrl: './barra-configuracion.component.html',
  styleUrls: ['./barra-configuracion.component.css']
})
export class BarraConfiguracionComponent implements OnInit, OnDestroy {


   isAuthenticated = false;
   private userSub: Subscription;

  constructor(private logging : LoggingService) { }

  ngOnInit(): void {
    this.userSub = this.logging.user.subscribe(user => {
      this.isAuthenticated =!user ? false : true;
    })

  }

  logout(){
  this.logging.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
