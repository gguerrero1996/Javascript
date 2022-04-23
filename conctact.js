let contacto = document.getElementById("contacto__formulario");
contacto.addEventListener("submit", validarMensaje);

function validarMensaje(e){
    e.preventDeFault();
    console.log("Formulario Enviado");
    alert("Tu mensaje ha sido enviado con exito");
}   