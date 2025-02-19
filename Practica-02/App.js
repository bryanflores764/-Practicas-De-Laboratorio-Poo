class Animal {
    //Tributos
     #name;// Atributo privado
    _raza;//Atributo protegido
    color;//Atributo publico
    constructor(name,raza,color){
        this.#name = name;
        this._raza= raza;
        this.color=color
    }

    getName(){
        return this.#name
    }

    sonido (){
        console.log(`El animal esta haciendo un sonido....`)
    }
}

module.exports=Animal