function probarValidarNombre() {
  console.assert(
    validarNombre("") === "tenes que poner tu nombre",
    "validar nombre no funciono con un string vacio"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "tenes que elegir una provincia",
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
      "wkejtdxncfplzrbivmoaqhsuygJVQBWFKLZRNGXIEPOMDCAHSTYUjqbvnzoswkejtdxncfplzrbivmoaqhsuygJVQBWFKLZRNGXIEPOMDCAHSTYUjqbvnzoswkejtdxncfplzrbivmoaqhsuygJVQBtc"
    ) === "el pedido tiene que contener menos de 150 caracteres",
    "validar regalo no funciono con 150 caracteres o mas"
  );
}

probarValidarCiudad();
probarValidarNombre();
probarValidarRegalo();