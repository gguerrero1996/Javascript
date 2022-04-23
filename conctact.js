var h1Contact =document.getElementsByClassName("contact__title");

let contacto = document.getElementById("contacto__formulario");
contacto.addEventListener("submit", validarmensaje);

function validarmensaje(e){
    e.preventDeFault();
    console.log("Formulario Enviado");
    alert("Tu mensaje ha sido enviado con exito");
}