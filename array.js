
                                        /* Pagina menu */

/* Funcion para suma de articulos */


let numero1 = parseInt(prompt("Ingrese valor de su primer producto"));
let numero2 = parseInt(prompt("Ingrese valor de su segundo producto"));
let numero3 = parseInt(prompt("Ingrese valor de su tercer producto"));

function productos (a, b, c){
    let suma = a + b + c
    return suma;
    
}

let resultado = productos(numero1, numero2, numero3);
console.log("El total de sus productos es", resultado);

/* Objeto para descripcion de productos */

function Te(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

/* Array para cantidad de productos en stock*/

    /* Cantidad de empanadas */
const empanada = ["Mechada", "Queso", "Domino", "Pollo", "Pabellon"];
console.log(empanada.length);

    /* Cantidad de arepa */
const arepa = ["Pepiada", "JyQ", "Sifrina", "Peluda", "Domino"];
console.log(ooblong.length);

    /* Cantida de empanadas y arepas total en stock */
const stock = empanada.concat(arepa)
console.log(stock.length)


                                    /* Pagina LOG IN */

/* Funcion para contraseña*/


let usuario = prompt("Ingrese su nombre de usuario")
let contrasena = prompt("Ingrese su contraseña")

    while(contrasena != "contraseñaEnBase"){
        alert("Dato erroneo");
        contrasena = prompt("Ingrese nuevamente su contraseña");
    }
