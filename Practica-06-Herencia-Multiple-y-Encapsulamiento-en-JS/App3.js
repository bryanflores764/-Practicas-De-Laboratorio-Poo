const Autenticacion = {
    login(usuario) {
        console.log(`El usuario ${usuario} ah iniciado sesion`);
    }
};
const Notificacion = {
    enviarNotificaion(mensaje) {
        console.log(`Notificacion: ${mensaje}`);
    }
};
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
}
Object.assign(Usuario.prototype, Autenticacion, Notificacion);
let usuario1 = new Usuario("bryan");
usuario1.login("bryan");
usuario1.enviarNotificaion("hola como estas");