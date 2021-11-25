import { Edu_Form } from './../edc-form.model';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-form-edcform',
  templateUrl: './form-edcform.component.html',
  styleUrls: ['./form-edcform.component.css'],
})
export class FormEdcformComponent implements OnInit {
  datosbbdd: Subscription = new Subscription;
  index;
  arrayindex = [];
  eduForm: FormGroup;
  edu_form = <Edu_Form>{};
  modEduform: Edu_Form[] = [];

  constructor(private data_storage: DataStorageService) { }

  ngOnInit(): void {
    this.updatelist();

    this.eduForm = new FormGroup({
      curso: new FormControl(''),
      centro: new FormControl(''),
      descripcion: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      cursomod: new FormControl('')
    });

  }

  updatelist() {
    this.arrayindex = [];
    this.modEduform = [];
    this.data_storage.fetchData_edcform().subscribe((value) =>
      this.datos(value)
    );
  }

  datos(info) {
    for (let x in info) {
      this.modEduform.push(info[x]);
      this.arrayindex.push(x);
    }
    for (let x in this.arrayindex) {
      this.modEduform[x].index = this.arrayindex[x];
    }
    console.log(this.modEduform);
  }

  onSubmit() {
    this.edu_form.curso = this.eduForm.value['curso'];
    this.edu_form.centro = this.eduForm.value['centro'];
    this.edu_form.descripcion = this.eduForm.value['descripcion'];
    this.edu_form.fecha_inicio = this.eduForm.value['fecha_inicio'];
    this.edu_form.fecha_fin = this.eduForm.value['fecha_fin'];
    console.log(this.edu_form);
    this.data_storage.storeData_edcform(this.edu_form).subscribe(() => {
      this.updatelist();
    });
    this.onCancel()
  }

  onCancel() {

    this.eduForm.reset('curso');
    this.eduForm.reset('centro');
    this.eduForm.reset('descripcion');
    this.eduForm.reset('fecha_inicio');
    this.eduForm.reset('fecha_fin');
    this.eduForm.reset("cursomod");

  }


  onEdit() {

    let a: Edu_Form = this.eduForm.value["cursomod"];
    console.log(a);
    this.index = a.index;

    if (a.descripcion==null){
      a.descripcion="";
    }

    this.eduForm.setValue({curso : a.curso,
      centro : a.centro,
      descripcion: a.descripcion ,
      fecha_inicio : a.fecha_inicio,
      fecha_fin : a.fecha_fin ,
      cursomod : this.eduForm.value['cursomod'] ,})

  }


  onUpdate() {

    this.edu_form.curso = this.eduForm.value['curso'];
    this.edu_form.centro = this.eduForm.value['centro'];
    this.edu_form.descripcion = this.eduForm.value['descripcion'];
    this.edu_form.fecha_inicio = this.eduForm.value['fecha_inicio'];
    this.edu_form.fecha_fin = this.eduForm.value['fecha_fin'];
    console.log(this.edu_form);
    this.data_storage.modData_edcform(this.edu_form, this.index).subscribe(() =>
      this.updatelist());
    this.onCancel();
    console.log(this.modEduform);

  }

  onDelete() {
    this.data_storage.delData_edcform(this.index).subscribe(() => {
      this.updatelist();
      console.log("borrado");
      this.onCancel();
    })
  }

}
