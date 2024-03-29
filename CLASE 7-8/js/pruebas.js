function probarValidarNombre() {
  console.assert(validarNombre("") === "tenes que ingresar tu nombre", "validar nombre no funciono con un string vacio");

  console.assert(
    validarNombre("dwdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "el nombre no puede contener 50 caracteres o mas",
    "validar nombre no funciono con 50 caracteres o mas"
  )

  console.assert(
    validarNombre("13") === "el nombre solo debe contener letras", "validar nombre no funciono solo con letras"
  )
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "tenes que elegir una ciudad en este campo",
    "validar ciuadad no funciono con un string vacio"
  );
}

function probarValidarRegalo() {
  console.assert(
    validarRegalo("") === "tenes que pedirle algo a santa",
    "validar regalo no funciono con un string vacio"
  );

  console.assert(
    validarRegalo(
      "wkejtdxncfplzrbivmoaqhsuygJVQBWFKLZRNGXIEPOMDCAHSTYwkejtdxncfplzrbivmoaqhsuygJVQBWFKLZRNGXIEPOMDCAHS"
    ) === "el pedido tiene que contener menos de 100 caracteres",
    "validar regalo no funciono con 100 caracteres o mas"
  );

  console.assert(
    validarRegalo(",") === "el regalo solo debe contener letras y numeros", "validar regalo no funciono solo con letrass o numeros"
  )
}

probarValidarCiudad();
probarValidarNombre();
probarValidarRegalo();