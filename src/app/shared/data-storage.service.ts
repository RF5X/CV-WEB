
import { Exp_Pro } from './../exp-pro/exp-pro.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inf_Per } from "../inf-per/inf-per.model";
//import { map, tap } from "rxjs/operators";
import { Edu_Form } from "../edc-form/edc-form.model";
import { Compet_Pers } from '../compet-pers/compet-pers.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  private url_infper = "https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/informacion/inf_per.json";
  private url_exppro = "https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/experiencia/exp_pro.json";
  private url_eduform = "https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/formacion/edu_form.json";
  private url_comp = "https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/competencias";



  constructor(private http: HttpClient) { }

  /*
  /////////////////
            DATOS PERSONALES
  /////////////////
  */
  storeData_infper(nombre: string, direccion: string, tel_fijo: number, tel_movil: number, email: string) {
    const infper: Inf_Per = new Inf_Per(nombre, direccion, tel_fijo, tel_movil, email);
    this.http.put(this.url_infper, infper).subscribe(response => {
      console.log(response);
    });

  }
  fetchData_infper() {
    return this.http.get<Inf_Per>(this.url_infper);
  }

  /*
  /////////////////
            EXPERIENCIA PROFESIONAL
  /////////////////
  */

  /*
    /////////////////
    storeData_exppro(exp_pro: Exp_Pro)  funcion para almacenar en la bbdd
    exp_pro: recibe la educacion/formacion a almacenar
    /////////////////
  */

  storeData_exppro(exp_pro: Exp_Pro) {
    return this.http.post(this.url_exppro, exp_pro)
  }

  /*
    /////////////////
    fetchData_exppro() funcion para traer los datos de la bbdd
    RETURN: devuelve un array del tipo Exp_Pro
    /////////////////
  */

  fetchData_exppro() {
    return this.http.get<Exp_Pro[]>(this.url_exppro)
    // .pipe(
    //   map(experiencia => {
    //     return experiencia.map(experiencia => {
    //       return {
    //         ...experiencia,
    //       };
    //     });
    //   }),
    //   tap(experiencia => {
    //      return experiencia;
    //   })
    // );
  }

  /*
    /////////////////
    modData_expro(exp_pro: Exp_Pro, key: string) funcion para modificar los datos de la bbdd
    exp_pro: recibe la competencia a almacenar
    key: indicie de la bbdd a modificar
    /////////////////
  */

  modData_expro(exp_pro: Exp_Pro, key: string) {
    key = "/" + key + ".json";
    return this.http.patch("https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/experiencia/exp_pro" + key, exp_pro)
  }

   /*
    /////////////////
    delData_expro(key: string) funcion para eliminar los datos de la bbdd
    key: indicie de la bbdd a eliminar
    /////////////////
  */

  delData_expro(key: string) {
    key = "/" + key + ".json";
    return this.http.delete("https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/experiencia/exp_pro" + key)
  }

  /*
  /////////////////
            EDUCACION FORMACION
  /////////////////
  */

  /*
    /////////////////
    storeData_edcform(edu_form: Edu_Form)  funcion para almacenar en la bbdd
    edu_form: recibe la educacion/formacion a almacenar
    /////////////////
  */

  storeData_edcform(edu_form: Edu_Form) {
    return this.http.post(this.url_eduform, edu_form);
  }

  /*
    /////////////////
    fetchData_edcform()  funcion para traer los datos de la bbdd
    RETURN: devuelve un array del tipo Edu_Form
    /////////////////
  */

  fetchData_edcform() {
    return this.http.get<Edu_Form[]>(this.url_eduform)
    // .pipe(
    //   map(fromacion => {
    //     return fromacion.map(fromacion => {
    //       return {
    //         ...fromacion,
    //       };
    //     });
    //   }),
    //   tap(fromacion => {
    //      return fromacion;
    //   })
    // );
  }

  /*
    /////////////////
    modData_edcform(edu_form: Edu_Form, key: string) funcion para modificar los datos de la bbdd
    edu_form: recibe la competencia a almacenar
    key: indicie de la bbdd a modificar
    /////////////////
  */

  modData_edcform(edu_form: Edu_Form, key: string) {
    key = "/" + key + ".json";
    return this.http.patch("https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/formacion/edu_form" + key, edu_form)
  }

 /*
    /////////////////
    delData_edcform(key: string) funcion para eliminar los datos de la bbdd
    key: indicie de la bbdd a eliminar
    /////////////////
  */

  delData_edcform(key: string) {
    key = "/" + key + ".json";
    return this.http.delete("https://curriculum-95382-default-rtdb.europe-west1.firebasedatabase.app/formacion/edu_form" + key)
  }

  /*
    /////////////////
              Competencias
    /////////////////
  */

  /*
    /////////////////
    storeData_comp(comp: Compet_Pers, parte: string, json :string)  funcion para almacenar en la bbdd
    comp: recibe la competencia a almacenar
    parte: ecibe parte de la URL
    json: extension json
    /////////////////
  */

  storeData_comp(comp: Compet_Pers, parte: string, json :string) {
    let url = this.url_comp +"/"+ parte  + json;
    return this.http.post(url,comp);
  }

  /*
    /////////////////
    fetchData_comp(parte: string, json :string) funcion para tarer los datos de la bbdd
    parte: ecibe parte de la URL
    json: extension json
    RETURN: devuelve un array del tipo Compet_Pers
    /////////////////
  */

  fetchData_comp(parte: string, json :string) {
    let url = this.url_comp +"/"+ parte + json;
    return this.http.get<Compet_Pers[]>(url)
  }

  /*
    /////////////////
    modData_comp(comp: Compet_Pers, key: string, parte: string) funcion para modificar los datos de la bbdd
    comp: recibe la competencia a almacenar
    parte: ecibe parte de la URL
    key: indicie de la bbdd a modificar
    /////////////////
  */

  modData_comp(comp: Compet_Pers, key: string, parte: string) {
    key = "/" + key + ".json";
    let url = this.url_comp +"/"+ parte + key;
    return this.http.patch(url , comp)
  }

  /*
    /////////////////
    delData_comp(key: string, parte: string) funcion para eliminar los datos de la bbdd
    parte: ecibe parte de la URL
    key: indicie de la bbdd a eliminar
    /////////////////
  */

  delData_comp(key: string, parte: string) {
    key = "/" + key + ".json";
    let url = this.url_comp +"/"+ parte + key;
    return this.http.delete(url);
  }

}
