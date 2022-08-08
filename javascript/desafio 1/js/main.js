class Vino {
    constructor(tipo, precio, unidades) {
        this.tipo = tipo
        this.precio = precio
        this.unidades = unidades
    }
        precioTax () {
            let precioFinal = this.precio * tax
            return "£" + precioFinal
        } 
}

const tax = 1.2

const tinto = new Vino("Vino tinto Malbec", 12.5, 90)

const blanco = new Vino("Vino blanco Chardonnay", 11, 84)

const rose = new Vino("Vino rose ", 17, 48)

const espumante = new Vino("Vino espumante Extra Brut", 25, 30)

let listaVinos = {tinto, blanco, rose, espumante}

function newWine() {
    tipo =  prompt("What type of wine is it?").toLowerCase()
    precio = prompt("What's the price? (in £)")
    unidades = prompt("How many have you got in stock?")
    const addWine = new Vino (tipo, precio, unidades)
    console.log(addWine)    
}

console.log(tinto.precioTax()),
console.log(blanco.precioTax()),
console.log(rose.precioTax()),
console.log(espumante.precioTax())


function calcularTinto() {  
    let cantidadIngresada = parseInt(prompt("how many Malbecs are you buying?"));
    
    return tinto.precio * cantidadIngresada * tax
}
function calcularBlanco() {  
    let cantidadIngresada = parseInt(prompt("how many Chardonnays are you buying?"));
    
    return blanco.precio * cantidadIngresada * tax
}
function calcularRose() {  
    let cantidadIngresada = parseInt(prompt("how many Rose are you buying?"));
    
    return rose.precio * cantidadIngresada * tax
}
function calcularEsp() {  
    let cantidadIngresada = parseInt(prompt("how many Fizzy Wines are you buying?"));
    
    return espumante.precio * cantidadIngresada * tax
}