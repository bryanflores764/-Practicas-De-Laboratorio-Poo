//Clase 
class Coche{
    constructor(marca,modelo,año,encendido){
        this._marca = marca;
        this._modelo=modelo;
        this._año=año;
        this._encendido=encendido;

    }

    mostarInfo(){
        document.write(`El coche es  ${this._marca} ${this._modelo} ${this._año} `)
    }

    Apagado(){
        if (this._encendido === false) {
            document.write(`El Auto esta pagado`)
            
        }else{
            document.write(`El Auto no esta apagado`)
        }
    }

    Encendido(){
        if (this._encendido === true) {
            document.write(`El Auto esta Encendido`)
            
        }else{
            document.write(`El Auto no esta Encendido`)
        }
    }
}

let Auto=new Coche('toyota',`corolla`,2025,true)

Auto.Apagado()