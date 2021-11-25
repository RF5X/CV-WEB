import { Compet_Pers } from './compet-pers.model';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compet-pers',
  templateUrl: './compet-pers.component.html',
  styleUrls: ['./compet-pers.component.css']
})
export class CompetPersComponent implements OnInit {

  list_comp: Compet_Pers[] = [];
  list_comp_comunicativas : Compet_Pers[] = [];
  list_comp_organizativas : Compet_Pers[] = [];

  constructor(private data_storage: DataStorageService) { }

  ngOnInit(): void {
    this.updatelist()
  }

  updatelist() {

    this.data_storage.fetchData_comp("competencias/comp_per", ".json").subscribe((value) =>
      this.datos_com(value)
    );
    this.data_storage.fetchData_comp("comunicativas/comp_comunicativa", ".json").subscribe((value) =>
      this.datos_comu(value)
    );
    this.data_storage.fetchData_comp("organizativas/comp_organizativa", ".json").subscribe((value) =>
      this.datos_org(value)
    );
  }

  datos_com(info) {
    for (let x in info) {
      this.list_comp.push(info[x]);
    }
    console.log(this.list_comp);
  }
  datos_comu(info) {
    for (let x in info) {
      this.list_comp_comunicativas.push(info[x]);
    }
    console.log(this.list_comp_comunicativas);
  }
  datos_org(info) {
    for (let x in info) {
      this.list_comp_organizativas.push(info[x]);
    }
    console.log(this.list_comp_organizativas);
  }
}
