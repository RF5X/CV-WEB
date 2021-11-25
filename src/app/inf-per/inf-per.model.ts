export class Inf_Per {
 public nombre : string;
 public direccion : string;
 public tel_fijo : number;;
 public tel_movil: number;
 public email: string;

  constructor(nombre:string,direccion:string,tel_fijo:number,tel_movil:number,email:string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.tel_fijo = tel_fijo;
    this.tel_movil = tel_movil;
    this.email = email;
  }
}
