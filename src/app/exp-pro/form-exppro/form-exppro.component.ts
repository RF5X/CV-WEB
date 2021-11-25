import { Subscription } from 'rxjs';
import { DataStorageService } from './../../shared/data-storage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Exp_Pro } from './../exp-pro.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exppro',
  templateUrl: './form-exppro.component.html',
  styleUrls: ['./form-exppro.component.css']
})
export class FormExpproComponent implements OnInit {
  index;
  arrayindex = [];
  datosbbdd: Subscription = new Subscription();
  expProForm: FormGroup;
  exp_pro = <Exp_Pro>{};
  modExpPro: Exp_Pro[] = [];

  constructor(private data_storage: DataStorageService) { }

  ngOnInit(): void {

    this.updatelist();

    this.expProForm = new FormGroup({
      puesto: new FormControl(''),
      empresa: new FormControl(''),
      descripcion: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      expmod: new FormControl('')
    })
  }

  datos(info) {

    for (let x in info) {
      this.modExpPro.push(info[x]);
      this.arrayindex.push(x);
    }
    for (let x in this.arrayindex) {
      this.modExpPro[x].index = this.arrayindex[x];
    }
    console.log(this.modExpPro);
  }

  onSubmit() {

    this.exp_pro.puesto_de_trabajo = this.expProForm.value['puesto'];
    this.exp_pro.empresa = this.expProForm.value['empresa'];
    this.exp_pro.descripcion = this.expProForm.value['descripcion'];
    this.exp_pro.fecha_inicio = this.expProForm.value['fecha_inicio'];
    this.exp_pro.fecha_fin = this.expProForm.value['fecha_fin'];
    console.log(this.exp_pro);
    this.data_storage.storeData_exppro(this.exp_pro).subscribe(()=>{
      this.updatelist()
    });
    this.onCancel();
  }

  onCancel() {

    this.expProForm.reset('puesto');
    this.expProForm.reset('empresa');
    this.expProForm.reset('descripcion');
    this.expProForm.reset('fecha_inicio');
    this.expProForm.reset('fecha_fin');
    this.expProForm.reset('expmod')
  }


  onEdit() {
    let a: Exp_Pro = this.expProForm.value["expmod"];
    console.log(a);
    this.index = a.index;

    if (a.descripcion==null){
      a.descripcion="";
    }

    this.expProForm.setValue({
      puesto : a.puesto_de_trabajo,
      empresa : a.empresa,
      descripcion: a.descripcion,
      fecha_inicio : a.fecha_inicio,
      fecha_fin : a.fecha_fin ,
      expmod : this.expProForm.value['expmod'] ,})

    this.datosbbdd.unsubscribe();
  }

  updatelist() {

    this.arrayindex = [];
    this.modExpPro = [];
    this.datosbbdd = this.data_storage.fetchData_exppro().subscribe((value) =>
      this.datos(value)
    );

  }

  onUpdate() {

    this.exp_pro.puesto_de_trabajo = this.expProForm.value['puesto'];
    this.exp_pro.empresa = this.expProForm.value['empresa'];
    this.exp_pro.descripcion = this.expProForm.value['descripcion'];
    this.exp_pro.fecha_inicio = this.expProForm.value['fecha_inicio'];
    this.exp_pro.fecha_fin = this.expProForm.value['fecha_fin'];
    console.log(this.exp_pro);
    this.data_storage.modData_expro(this.exp_pro, this.index).subscribe( () =>{
      this.updatelist()
    })
    this.onCancel();
    console.log(this.modExpPro);
  }

  onDelete(){

    this.data_storage.delData_expro(this.index).subscribe( () =>{
      this.updatelist();
      console.log("borrado");
      this.onCancel();
    })
  }

}
