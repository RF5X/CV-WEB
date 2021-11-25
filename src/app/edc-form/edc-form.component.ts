import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Edu_Form } from './edc-form.model';


@Component({
  selector: 'app-edc-form',
  templateUrl: './edc-form.component.html',
  styleUrls: ['./edc-form.component.css']
})
export class EdcFormComponent implements OnInit {

  edu_form : Edu_Form[]=[];
  constructor(private data_storage: DataStorageService) { }

  ngOnInit(): void {
    this.data_storage.fetchData_edcform().subscribe((value) =>
      this.datos(value)
    );
  }

  datos(info) {
    for (let x in info ) {
      this.edu_form.push(info[x])}
    console.log(this.edu_form);
    let arr : Edu_Form[] = [];
    for (let d = this.edu_form.length -1 ; d>=0; d--){
    arr.push(this.edu_form[d]);
    }
    this.edu_form = arr;
  }
  getdatos(){
    return this.edu_form;
  }

}
