/* Append */

let animal = document.getElementById("animal");
let especies = ["Canario", "Loro", "Pato", "Gallina", "Guacamayo", "Tucan"];

for (const especie of especies){
    let li = document.createElement("li");
    li.innerHTML = especie;
    animal.append(li);
}

/* Input */

document.getElementById("nombre").value = "Plumiferos";
document.getElementById("cantidad").value = 6;

let Input = document.getElementById("nombre");
console.log(input.value);

