const readline=require(`readline`)

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,

})


class Usuario {
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad=edad
    }
    

    MostrarInfo(){
        console.log(`Usuario: ${this._nombre}, Edad: ${this._edad}`)
    }
}


rl.question(`Ingrese Su nombre: `,(nombre)=>{
    rl.question(`Ingrese Su edad: `,(edad)=>{
        const Usuario1 = new Usuario(nombre,parseFloat(edad))
        Usuario1.MostrarInfo()
        rl.close();
    })

})