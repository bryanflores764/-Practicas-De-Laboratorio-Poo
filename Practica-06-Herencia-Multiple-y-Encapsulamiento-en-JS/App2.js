class CuentaBancaria {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.saldo = saldo;
        this.nombre = nombre;
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Su deposito exitoso.Nuevo Saldo ${this.saldo}`);
        }
        else {
            console.log(` error el monto debe ser ayor a 0`);
        }
    }
    obtenerSaldo() {
        return `Saldo disponible: ${this.saldo}`;
    }
}
const cuanta = new CuentaBancaria('bryan', 100);
console.log(cuanta.obtenerSaldo());
cuanta.depositar(200);
console.log(cuanta.obtenerSaldo());