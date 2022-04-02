// Función para suma de articulos

let numero1 = parseInt(prompt("Ingrese valor de su primer producto"));
let numero2 = parseInt(prompt("Ingrese valor de su segundo producto"));
let numero3 = parseInt(prompt("Ingrese valor de su tercer producto"));

function productos (numero1, numero2, numero3){
    return numero1 + numero2 + numero3;
}

let resultado = sumar(numero1, numero2, numero3);
console.log("El total de productos es", resultado);