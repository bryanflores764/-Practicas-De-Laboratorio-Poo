const Comunicacion={
    enviarMensaje(mensaje){
        console.log(`${this.nombre} envio:${mensaje}`)
    }
};


const Registro={
    registrarAccion(accion){
        console.log(`${this.nombre}  realizo: ${accion}`)

    }
}

class Usuario{
    constructor(nombre){
        this.nombre=nombre;
    }
};


Object.assign(Usuario.prototype,Comunicacion,Registro)

const Usuario1 = new Usuario("bryan")

Usuario1.enviarMensaje("hola que tal")
Usuario1.registrarAccion("Inicio de se")



