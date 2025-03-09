class Vehicle {
    constructor(marca, modelo, anio, kilometraje, disponible) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.disponible = disponible;
    }

    get Marca() {
        return this.marca;
    }

    get Modelo() {
        return this.modelo;
    }

    get Anio() {
        return this.anio;
    }

    get Kilometraje() {
        return this.kilometraje;
    }

    get Disponible() {
        return this.disponible;
    }

    aumentarKilometraje(kilometros) {
        if (kilometros > 0 && kilometros > this.kilometraje) {
            this.kilometraje += kilometros;
        } else {
            console.log('No se puede aumentar el kilometraje');
        }
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
    }

    mostrarInformacion() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nKilometraje: ${this.kilometraje}\nDisponible: ${this.disponible}`);
    }
}

const vehiculo = new Vehicle('Toyota', 'Corolla', 2020, 1000, true);
console.log(vehiculo.Marca);
vehiculo.aumentarKilometraje(1500)
vehiculo.cambiarDisponibilidad()