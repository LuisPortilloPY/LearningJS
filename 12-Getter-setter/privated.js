class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es: ${this.nombre}`);
  }
}
const persona = new Persona("Juan", 30);
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
console.log(persona);
persona.saludar(); // Hola, mi nombre es: Juan
persona.nombre = "Pedro";
console.log(persona.nombre); // Pedro

// de esta forma mis variables son publicas y si quiero que sean privadas se debe de usar el pretected
// y si quiero que sean privadas se debe de usar el private
// para que no se pueda acceder a la variable desde fuera de la clase
// para que no se pueda modificar la variable desde fuera de la clase
// para que no se pueda acceder a la variable desde fuera de la clase
// para que no se pueda modificar la variable desde fuera de la clase
// por ejemplo #nombre #edad

class NPersona {
  #name; // se puede declarar la variable privada de esta forma;
  #age;
  _isDeveloper = true;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  saludar() {
    console.log(`Hola, mi nombre es: ${this.#name}`);
  }

  obtenerNombre() {
    return this.#name;
  }

  obtenerEdad() {
    return this.#age;
  }
}

const newPerson = new NPersona("Luis", 30);
console.log(newPerson.nombre); // undefined
console.log(newPerson.obtenerNombre()); // Luis
console.log(newPerson.obtenerEdad()); // 30
console.log(newPerson._isDeveloper);
