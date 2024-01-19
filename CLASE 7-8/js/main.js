const $form = document.querySelector("#carta-a-santa")

let select = document.querySelector("select");

let textArea = document.querySelector("textarea");

let inputNombre = document.querySelector("#nombre")

let ciudad = select.value;

let regaloNavidad = textArea.value;

let nombre = inputNombre.value

$form.onsubmit = validarFormulario

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "tenes que ingresar tu nombre"
  }

  if (nombre.length >= 50) {
    return "el nombre no puede contener 50 caracteres o mas"
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "el nombre solo debe contener letras"
  }
  return ""
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "tenes que elegir una ciudad en este campo";
  }
  return "";
}

function validarRegalo(regaloNavidad) {
  if (regaloNavidad.length === 0) {
    return "tenes que pedirle algo a santa";
  }

  if (regaloNavidad.length >= 100) {
    return "el pedido tiene que contener menos de 100 caracteres";
  }

  if (!/^[a-z0-9]+$/.test(regaloNavidad)) {
    return "el regalo solo debe contener letras y numeros"
  }

  return "";
}

function validarFormulario() {
  const nombre = $form.nombre.value
  const ciudad = $form.ciudad.value
  const descripcionRegalo = $form["descripcion-regalo"].value

  const errorNombre = validarNombre(nombre)
  const errorCiudad = validarCiudad(ciudad)
  const errorDescripcionRegalo = validarRegalo(descripcionRegalo)

  const errores = {
    descripcionRegalo: errorDescripcionRegalo,
    ciudad: errorCiudad,
    nombre: errorNombre
  }

  if (manejarErrores(errores)) {
    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }

  return false
}

function manejarErrores(errores) {
  let condicionDeCorte = true
  errorNombre = errores.nombre
  errorCiudad = errores.ciudad
  errorDescripcionRegalo = errores.descripcionRegalo

  if (errorNombre) {
    $form.nombre.className = "error"
    condicionDeCorte = false
  } else {
    $form.nombre.className = ""
  }

  if (errorCiudad) {
    $form.ciudad.className = "error"
    condicionDeCorte = false
  } else {
    $form.ciudad.className = ""
  }

  if (errorDescripcionRegalo) {
    $form["descripcion-regalo"].className = "error"
    condicionDeCorte = false
  } else {
    $form["descripcion-regalo"].className = ""
  }

  return condicionDeCorte
}