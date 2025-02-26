class Empleado{
    #sueldo;
    constructor(nombre,puesto,sueldo){
        this.#sueldo = sueldo;
        this.nombre=nombre;
        this.puesto=puesto;
    }

    get sueldo(){
        return this.#sueldo
    }

    setsueldo(nuevoSueldo){
        if(nuevoSueldo>this.#sueldo){
            this.#sueldo = nuevoSueldo
        }else{
            console.log(`Jodase!`)
        }
    }

    showInfo(){
        console.log(`Empleado: ${this.nombre} , Puesto ${this.puesto} ,Sueldo ${this.#sueldo}`)
    }
}

let Empleado1 = new Empleado(`bryan`,`desarrollador`,`700`)
Empleado1.showInfo()
Empleado1.setsueldo(500)
Empleado1.showInfo()
Empleado1.setsueldo(8000)
Empleado1.showInfo()