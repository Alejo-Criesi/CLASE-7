function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "tenes que ingresar tu nombre"
  }

  if(nombre.length >= 50){
    return "el nombre no puede contener 50 caracteres o mas"
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

  return "";
}

document.querySelector("button").onclick = function () {
  let select = document.querySelector("select");
  
  let ciudad = select.value;
  
  let textArea = document.querySelector("textarea");
  
  let regaloNavidad = textArea.value;
  
  let inputNombre = document.querySelector("#nombre")
  
  let nombre = inputNombre.value
  
  console.log(validarNombre(nombre))
  console.log(validarCiudad(ciudad)) 
  console.log(validarRegalo(regaloNavidad));
}