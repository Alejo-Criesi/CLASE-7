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
  enviarFamiliares();
};

botonCalcular.onclick = function () {
  agruparEdades();
};

botonEliminar.onclick = function () {
  eliminarTodo();
};

function enviarFamiliares() {
  let cantidadDeFamiliares = Number(document.querySelector("#cantidad").value);
  aparecerBotones();
  crearFamiliares(cantidadDeFamiliares);
}

function aparecerBotones() {
  let aparecerCalcular = document.querySelector("#calcular");
  aparecerCalcular.className = "btn btn-primary";
  let aparecerEliminar = document.querySelector("#eliminar");
  aparecerEliminar.className = "btn btn-primary";
}

function crearFamiliares(cantidadDeFamiliares) {
  for (let index = 0; index < cantidadDeFamiliares; index++) {
    let label = document.createElement("label");
    label.textContent = "Familiar " + (index + 1);
    label.className = "form-label";
    label.id = "label-familiar";
    let input = document.createElement("input");
    input.type = "number";
    input.className = "form-control";
    input.id = "input-familiar";
    input.placeholder = "introduza la edad";
    div.appendChild(label);
    div.appendChild(input);
  }
}

function agruparEdades() {
  let inputs = document.querySelectorAll("#input-familiar");
  let edades = [];
  let valorDelInput;

  for (let index = 0; index < inputs.length; index++) {
    valorDelInput = Number(inputs[index].value);
    edades.push(valorDelInput);
  }

  if (validarEdad(inputs)) {
    mostrarEdades(edades);
  }
}

function validarEdad(inputs) {
  let condicionDeCorte = true;
  let textoError = document.querySelector("#texto-error");

  inputs.forEach(function (input) {
    let edad = Number(input.value);
    let simboloNoPermitidos = /[a-z],\./.test(edad);

    if (edad < 0) {
      input.style.border = "2px solid red";
      condicionDeCorte = false;
    } else if (edad == simboloNoPermitidos) {
      input.style.border = "2px solid red";
      condicionDeCorte = false;
    } else {
      input.style.border = "";
      textoError.classList.replace("alert-danger", "ocultar");
    }
  });

  if (!condicionDeCorte) {
    textoError.className = "alert alert-danger";
  }

  return condicionDeCorte;
}

function mostrarEdades(edades) {
  let textoResultado = document.querySelector("em");
  textoResultado.textContent =
    "el miembro con mas edad tiene " +
    calcularEdadMayor(edades) +
    " años, el miembro menor tiene " +
    calcularEdadMenor(edades) +
    " años y la edad promedio en el grupo familiar es de " +
    calcularEdadPromedio(edades) +
    " años";
}

function calcularEdadMayor(edades) {
  let numeroComparador = edades[0];

  for (let index = 0; index < edades.length; index++) {
    if (numeroComparador <= edades[index]) {
      numeroComparador = edades[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadMenor(edades) {
  let numeroComparador = edades[0];

  for (let index = 0; index < edades.length; index++) {
    if (numeroComparador >= edades[index]) {
      numeroComparador = edades[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadPromedio(edades) {
  let contador = 0;

  for (let index = 0; index < edades.length; index++) {
    contador = contador + edades[index];
  }

  let edadPromedio = contador / edades.length;

  return edadPromedio;
}

function eliminarTodo() {
  resetearTextoResultado();
  ocultarBotones();
  eliminarFamiliares();
  ocultarTextoError();
}

function resetearTextoResultado() {
  let textoResultado = document.querySelector("em");
  textoResultado.textContent =
    "aca va a aparecer la edad mayor, menor y la promedio del grupo familiar";
}

function ocultarBotones() {
  let ocultarCalcular = document.querySelector("#calcular");
  let ocultarEliminar = document.querySelector("#eliminar");
  ocultarCalcular.className = "ocultar";
  ocultarEliminar.className = "ocultar";
}

function eliminarFamiliares() {
  let labels = document.querySelectorAll("#label-familiar");
  let inputs = document.querySelectorAll("#input-familiar");

  labels.forEach(function (label) {
    label.remove();
  });

  inputs.forEach(function (input) {
    input.remove();
  });
}

function ocultarTextoError() {
  let textoError = document.querySelector("#texto-error");
  textoError.className = "ocultar";
}
