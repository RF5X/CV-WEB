import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Inf_Per } from './inf-per.model';

@Component({
  selector: 'app-inf-per',
  templateUrl: './inf-per.component.html',
  styleUrls: ['./inf-per.component.css']
})
export class InfPerComponent implements OnInit {


  inf_per : Inf_Per = new Inf_Per ("","",0,0,"") ;


  constructor(private data_storage: DataStorageService) {

  }

  ngOnInit(): void {
  this.data_storage.fetchData_infper().subscribe((value: Inf_Per) =>
  this.datos(value)
  );
  }

  datos(info:Inf_Per){
    this.inf_per = new Inf_Per (info.nombre,info.direccion,info.tel_fijo,info.tel_movil,info.email);
    console.log(this.inf_per);
  }

  // onSaveData(){
  //   //this.inf_per = new Inf_Per(this.nombre,this.direccion,this.tel_fijo,this.tel_movil,this.email);
  //   this.data_storage.storeData_infper(this.nombre,this.direccion,this.tel_fijo,this.tel_movil,this.email);
  // }

}
