const Animal = require(`./App.js`)

class Perro extends Animal{
    constructor(nombre,raza,color,){
        super(nombre,raza,color)
       

    }

    get Name(){
        return super.getName()
    }

    sonido(){
        console.log(`GUA gua`)
    }



}


let perro = new Perro(`Jony`,`Aguacate`,`Rojo`)

console.log(perro.Name)
perro.sonido()