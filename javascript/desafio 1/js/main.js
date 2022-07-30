class Vino {
    constructor(tipo, precio, unidades) {
        this.tipo = tipo
        this.precio = precio
        this.unidades = unidades
        this.precioTax = function () {
            let precioFinal = this.precio * tax
            return "£" + precioFinal
        }
    }
}

const tax = 1.2

const tinto = new Vino("Vino tinto Malbec", 12.5, 90)

const blanco = new Vino("Vino blanco Chardonnay", 11, 84)

const rose = new Vino("Vino rose ", 17, 48)

const espumante = new Vino("Vino espumante Extra Brut", 25, 30)

let listaVinos = {tinto, blanco, rose, espumante}
    do {
        listaVinos.precio = alert("Alert! Low stock, time to order more!");
        console.log("Alert! Low stock, time to order more!");
    } while (listaVinos.precio < 100)