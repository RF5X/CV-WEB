import { Compet_Pers } from './../compet-pers.model';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp-form',
  templateUrl: './comp-form.component.html',
  styleUrls: ['./comp-form.component.css']
})
export class CompFormComponent implements OnInit {

  index
  arrayindex = [];
  list_Comp_Form: Compet_Pers[] = [];
  comp_Form: FormGroup;
  comp = <Compet_Pers>{};
  opcion_select;

  opcion: string;
  lista_de_modificacion = ["Competencias personales", "Competencias cominicativas", "Competencias de organización"];

  constructor(private data_storage: DataStorageService) { }

  ngOnInit(): void {


    this.reForm();
    this.updatelist();


  }
  reForm() {
    this.comp_Form = new FormGroup({
      competencia: new FormControl(''),
      compmod: new FormControl(''),
      lista_modificacion: new FormControl('')
    });

  }
  updatelist() {
    this.arrayindex = [];
    this.list_Comp_Form = [];
    this.data_storage.fetchData_comp(this.opcion, ".json").subscribe((value) =>
      this.datos(value)
    );
  }

  datos(info) {
    for (let x in info) {
      this.list_Comp_Form.push(info[x]);
      this.arrayindex.push(x);
    }
    for (let x in this.arrayindex) {
      this.list_Comp_Form[x].index = this.arrayindex[x];
    }
    console.log(this.list_Comp_Form);
  }


  onSubmit() {

    this.comp.competencia = this.comp_Form.value['competencia'];
    this.data_storage.storeData_comp(this.comp, this.opcion, ".json").subscribe(() => {
      this.updatelist();
      this.onCancel();
    })
  }

  onCancel() {

    this.comp_Form.reset('competencia');

  }

  onEdit() {

    let a: Compet_Pers = this.comp_Form.value["compmod"];
    console.log(a.index);
    this.index = a.index;

    this.comp_Form.setValue({competencia : a.competencia, compmod : this.comp_Form.value['compmod'] , lista_modificacion : this.comp_Form.value['lista_modificacion'] })
    console.log(this.comp_Form.value);

  }

  onUpdate() {

    this.comp.competencia = this.comp_Form.value['competencia'];
    console.log(this.comp);
    this.data_storage.modData_comp(this.comp, this.index, this.opcion).subscribe(() =>
      this.updatelist());
    this.onCancel();
    console.log(this.comp);

  }

  onDelete() {

    this.data_storage.delData_comp(this.index, this.opcion).subscribe(() => {
      this.updatelist();
      console.log("borrado");
      this.onCancel();
    })

  }

  opcion_modificacion() {

    this.opcion_select = this.comp_Form.value['lista_modificacion'];
    console.log(this.opcion_select);

    switch (this.opcion_select) {
      case "Competencias personales":
        this.opcion = "competencias/comp_per"
        console.log(this.opcion);
        break;
      case "Competencias cominicativas":
        this.opcion = "comunicativas/comp_comunicativa"
        console.log(this.opcion);
        break;
      case "Competencias de organización":
        this.opcion = "organizativas/comp_organizativa"
        console.log(this.opcion);
        break;

    }
    this.updatelist();
  }

}
