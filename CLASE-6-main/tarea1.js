/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const div = document.querySelector("#form");

let botonCalcular = document.querySelector("#calcular");

let botonEliminar = document.querySelector("#eliminar");

let botonEnviar = document.querySelector("#enviar");

botonEnviar.onclick = function () {
  enviar()
};

botonCalcular.onclick = function () {
  calcular()
};

botonEliminar.onclick = function () {
  eliminar()
};

function enviar() {
  let cantidadDeFamiliares = Number(document.querySelector("#cantidad").value);
  let aparecerCalcular = document.querySelector("#calcular")
  aparecerCalcular.className = "boton"
  let aparecerEliminar = document.querySelector("#eliminar")
  aparecerEliminar.className = "boton"

  for (let index = 0; index < cantidadDeFamiliares; index++) {
    let label = document.createElement("label");
    label.textContent = "familiar " + (index + 1);
    label.className = "label-familiar";
    let input = document.createElement("input");
    input.type = "number";
    input.className = "input-familiar";
    let br = document.createElement("br");
    br.className = "br";
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
  }
}

function calcular() {
  let inputs = document.querySelectorAll(".input-familiar");
  let arrayDeInputs = [];
  let valorDelInput;

  for (let index = 0; index < inputs.length; index++) {
    valorDelInput = Number(inputs[index].value);
    arrayDeInputs.push(valorDelInput);
  }

  if (validarEdad(inputs)) {
    calcularEdad(arrayDeInputs)
  }
}

function eliminar() {
  let ocultarCalcular = document.querySelector("#calcular")
  let ocultarEliminar = document.querySelector("#eliminar")
  let em = document.querySelector("em");
  let labels = document.querySelectorAll(".label-familiar");
  let inputs = document.querySelectorAll(".input-familiar");
  let textoError = document.querySelector(".texto-error")
  let br = document.querySelectorAll(".br");

  labels.forEach(function (label) {
    label.remove();
  })

  inputs.forEach(function (input) {
    input.remove();
  })

  br.forEach(function (br) {
    br.remove();
  })

  ocultarCalcular.className = "ocultar"
  ocultarEliminar.className = "ocultar"
  em.textContent =
    "aca va a aparecer la edad mayor, menor y la promedio del grupo familiar"
  textoError.className = "ocultar"
}

function validarEdad(inputs) {
  let condicionDeCorte = true
  let textoError = document.querySelector("#texto-error")

  inputs.forEach(function (input) {
    let edad = Number(input.value)
    let simboloNoPermitidos = /[a-z],\./.test(edad)

    if (edad <= 0) {
      input.classList.add("error")
      condicionDeCorte = false
    } else {
      input.classList.toggle("error", false)
      textoError.classList.replace("texto-error", "ocultar")
    }

    if (edad == simboloNoPermitidos) {
      input.classList.add("error")
      condicionDeCorte = false
    } else {
      input.classList.toggle("error", false)
      textoError.classList.replace("texto-error", "ocultar")
    }
  })

  if (!condicionDeCorte) {
    textoError.className = "texto-error"
  }

  return condicionDeCorte
}

function calcularEdad(arrayDeInputs) {
  let em = document.querySelector("em");
  em.textContent =
    "el miembro con mas edad tiene " +
    calcularEdadMayor(arrayDeInputs) +
    " años, el miembro menor tiene " +
    calcularEdadMenor(arrayDeInputs) +
    " años y la edad promedio en el grupo familiar es de " +
    calcularEdadPromedio(arrayDeInputs) +
    " años";
}

function calcularEdadMayor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];

  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador <= arrayDeInputs[index]) {
      numeroComparador = arrayDeInputs[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadMenor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];

  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador >= arrayDeInputs[index]) {
      numeroComparador = arrayDeInputs[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadPromedio(arrayDeInputs) {
  let contador = 0;

  for (let index = 0; index < arrayDeInputs.length; index++) {
    contador = contador + arrayDeInputs[index];
  }

  let edadPromedio = contador / arrayDeInputs.length;

  return edadPromedio;
}