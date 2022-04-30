// Shopping Cart
//Falta armar una página donde se indique la lista de compras
const carrito = document.getElementById("carrito");
const comida = document.getElementsByClassName("lista__comida");
const lista__comida = document.querySelector("#lista__carrito tbody");
const btnVaciarCarrito = document.getElementsByClassName("vaciar__carrito");

cargarEventListener();

function cargarEventListener(){
    //Agrega al carrito
    comida.addEventListener("click", comprarComida);

    //Elimina una commida del carrito
    carrito.addEventListener("click", eliminarComida);

    //Vaciar Carrito 
    btnVaciarCarrito.addEventListener("click", vaciarCarrito);

    //Al cargar el documento , mostrar el localstorage
    document.addEventListener("DOMContentLoaded", cargarLocalStorage);
}
//Funciones

//Añade comida al carrito
function comprarComida(e){
    e.preventDefault();
    if (e.target.classlist.contains("agregar-carrito")) {
        const comida = e.target.parentElement.parentElement;
        leerDatosCurso(comida);
    }
}

//Vaciar el carrito de compras
function vaciarCarrito(e) {
    while(lista__comida.firstChild);{
        lista__comida.removeChild(lista__comida.firstChild);
    }
    localStorage.removeItem("comida");
    return false;
}

//Almacena comida en el carrito al local storage

function guardarCursoLocalStorage(comida) {
    //tomar el valor del local storage
    let comida = obtenerCursosLocalStorage();
    //La comida seleccionada se agrega al array
    comida.push(comida);
    localStorage.setItem("cursos", JSON.stringify(te));
}