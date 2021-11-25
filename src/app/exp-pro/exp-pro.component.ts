import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Exp_Pro } from './exp-pro.model';

@Component({
  selector: 'app-exp-pro',
  templateUrl: './exp-pro.component.html',
  styleUrls: ['./exp-pro.component.css']
})
export class ExpProComponent implements OnInit {

  exp_pro: Exp_Pro[] = [];

  constructor(private data_storage : DataStorageService) { }

  ngOnInit(): void {
    this.data_storage.fetchData_exppro().subscribe((value) =>
    this.datos(value)
    );
  }

    datos(info){
      for (let x in info) {
        this.exp_pro.push(info[x])}
    }

  // salvar(){
  //   this.data_storage.storeData_exppro(this.exp_pro);
  // }

}
