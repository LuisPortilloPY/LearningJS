const persona = {
  nombre: "LUIS",
  apellido: "PORTILLO",
  edad: 10,
};
console.log(persona);

function obtenerdDobleEdad(edad) {
  return 2 * edad;
}

const dobleEdad = obtenerdDobleEdad(persona.edad);
console.log(dobleEdad);
