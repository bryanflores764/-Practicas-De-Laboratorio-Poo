
//Creacion de un objeto

const Persona={
    //Atributos
    nombre:'bryan',
    edad:24,

    //Metodos
    saludar:function(){
        console.log(`Hola Usuario ${this.nombre}`)

    }
}

//Metodo
console.log(Persona.nombre)

//Metodo String
console.log(Persona[`edad`])

//Modificacion de atributos
Persona.edad=45
console.log(Persona[`edad`])

//Add new  prop
Persona.ocupacion ='Desarrollador'
console.log(Persona.ocupacion)
console.log(Persona.saludar())