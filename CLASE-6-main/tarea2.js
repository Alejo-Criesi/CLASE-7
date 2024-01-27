/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let form = document.querySelector("#form");

let botonCalcular = document.querySelector("#calcular");

let botonAgregar = document.querySelector("#agregar");

let botonEliminar = document.querySelector("#eliminar");

let botonEnviar = document.querySelector("#enviar");

botonEnviar.onclick = function () {
  enviarFamiliares();
};

botonCalcular.onclick = function () {
  agruparSalarios();
};

botonAgregar.onclick = function () {
  agregarFamiliares();
};

botonEliminar.onclick = function () {
  eliminarTodo();
};

function enviarFamiliares() {
  let cantidadDeFamiliares = Number(document.querySelector("#cantidad").value);
  crearFamiliares(cantidadDeFamiliares);
  aparecerBotones();
}

function crearFamiliares(cantidadDeFamiliares) {
  for (let index = 0; index < cantidadDeFamiliares; index++) {
    let label = document.createElement("label");
    label.textContent = "familiar " + (index + 1);
    label.className = "form-label";
    label.id = "label-familiar";
    form.appendChild(label);

    let input = document.createElement("input");
    input.type = "number";
    input.className = "form-control";
    input.id = "input-familiar";
    input.placeholder = "introduzca el salario";
    form.appendChild(input);
  }
}

function aparecerBotones() {
  let aparecerCalcular = document.querySelector("#calcular");
  aparecerCalcular.className = "btn btn-primary";
  let aparecerEliminar = document.querySelector("#eliminar");
  aparecerEliminar.className = "btn btn-primary";
  let aparecerAgregar = document.querySelector("#agregar");
  aparecerAgregar.className = "btn btn-primary";
}

function agruparSalarios() {
  let inputs = document.querySelectorAll("#input-familiar");
  let salarios = [];
  let arrayDeInputsEnCero = [];
  let valorDelInput;

  for (let index = 0; index < inputs.length; index++) {
    valorDelInput = Number(inputs[index].value);
    if (valorDelInput === 0) {
      arrayDeInputsEnCero.push(valorDelInput);
    } else {
      salarios.push(valorDelInput);
    }
  }

  if (validarSalario(inputs)) {
    mostrarSalarios(salarios);
  }
}

function agregarFamiliares() {
  let label = document.createElement("label");
  label.textContent = "familiar agregado ";
  label.className = "form-label";
  label.id = "label-familiar";
  form.appendChild(label);

  let input = document.createElement("input");
  input.type = "number";
  input.className = "form-control";
  input.id = "input-familiar";
  input.placeholder = "introduzca el salario";
  form.appendChild(input);
}

function validarSalario(inputs) {
  let condicionDeCorte = true;
  let textoError = document.querySelector("#texto-error");

  inputs.forEach(function (input) {
    let salario = Number(input.value);
    let simboloNoPermitidos = /[a-z],\./.test(input);

    if (salario < 0) {
      input.style.border = "2px solid red";
      condicionDeCorte = false;
    } else if (salario == simboloNoPermitidos) {
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

function mostrarSalarios(salarios) {
  let textoResultado = document.querySelector("em");
  textoResultado.textContent =
    "el miembro con el salario mas alto cobra " +
    calcularSalarioMayor(salarios) +
    " pesos, el miembro con el salario mas bajo cobra " +
    calcularSalarioMenor(salarios) +
    " pesos, y el salario promedio en el grupo familiar es de " +
    calcularSalarioPromedio(salarios) +
    " pesos";
}

function calcularSalarioMayor(salarios) {
  let numeroComparador = salarios[0];
  for (let index = 0; index < salarios.length; index++) {
    if (numeroComparador >= salarios[index]) {
      numeroComparador = numeroComparador;
    } else {
      numeroComparador = salarios[index];
    }
  }
  return numeroComparador;
}

function calcularSalarioMenor(salarios) {
  let numeroComparador = salarios[0];

  for (let index = 0; index < salarios.length; index++) {
    if (numeroComparador <= salarios[index]) {
      numeroComparador = numeroComparador;
    } else {
      numeroComparador = salarios[index];
    }
  }
  return numeroComparador;
}

function calcularSalarioPromedio(salarios) {
  let contador = 0;

  for (let index = 0; index < salarios.length; index++) {
    contador = contador + salarios[index];
  }

  let salarioPromedio = contador / salarios.length;

  return salarioPromedio;
}

function eliminarTodo() {
  resetearTextoResultado();
  eliminarFamiliares();
  ocultarTextoError();
  ocultarBotones();
}

function resetearTextoResultado() {
  let textoResultado = document.querySelector("em");
  textoResultado.textContent =
    "aca va a aparecer el salario mayor, menor y promedio del grupo familiar";
}

function eliminarFamiliares() {
  let label = document.querySelectorAll("#label-familiar");
  let input = document.querySelectorAll("#input-familiar");
  label.forEach(function (label) {
    label.remove();
  });

  input.forEach(function (input) {
    input.remove();
  });
}

function ocultarTextoError() {
  let textoError = document.querySelector("#texto-error");
  textoError.className = "ocultar";
}

function ocultarBotones() {
  let ocultarCalcular = document.querySelector("#calcular");
  let ocultarEliminar = document.querySelector("#eliminar");
  let ocultarAgregar = document.querySelector("#agregar");
  ocultarCalcular.className = "ocultar";
  ocultarEliminar.className = "ocultar";
  ocultarAgregar.className = "ocultar";
}
