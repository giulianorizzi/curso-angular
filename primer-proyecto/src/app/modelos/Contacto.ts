export class Contacto {
    nombre:string;
    numeroTel:number;
    dir:string;
    //TODO: hacer la direccion
    constructor(nombre:string, numeroTel:number, dir:string){
        this.nombre = nombre;
        this.numeroTel = numeroTel;
        this.dir = dir;
    }
}