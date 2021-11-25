import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activado = "hidden";
  constructor() { }

  ngOnInit(): void {
  }

  loge(){
    if (this.activado=="hidden"){
      return this.activado="flex"
    }else{
      return this.activado="hidden"
    }

  }
}
