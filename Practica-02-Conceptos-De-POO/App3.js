const Animal = require(`./App.js`)

class GAto extends Animal{
    constructor(nombre ,raza,color){
        super(nombre,raza,color)

    }

    sonido(){
        console.log(`Miau miau`)
    }
}

let gato1 = new GAto(`Michi`,`Albino`,`Negro`)
gato1.sonido()