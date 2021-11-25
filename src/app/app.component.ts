import { LoggingService } from './logging/logging.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'CVWEB';

  constructor(private loggingService : LoggingService){}

  ngOnInit(): void {
      this.loggingService.autologgin();

  }
}
