// getter -> son metodos que nos permiten obtener atributos/metodos privados o protegidos
// setter -> son metodos que nos permiten modificar atributos/metodos privados o protegidos
// por ejemplo
class Persona {
  #nombre;
  #apellido;
  #edad;
  #obtenerEdad;
  constructor(nombre, apellido, edad) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
    this.#obtenerEdad = edad;
  }
  obtenerNombre() {
    return this.#nombre;
  }
  obtenerApellido() {
    return this.#apellido;
  }
  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  // #obtenerEdad(){
  //     return this.#edad;
  // }

  // obtenerApellido() {
  //     return this.#apellido;
  // }
  // #obtenerEdad() {
  //     return this.#edad;
  // }
  getEdad() {
    return this.#edad;
  }
}
const persona = new Persona("Juan", "Perez", 30);
// console.log(persona.obtenerApellido());

const age = persona.getEdad();
console.log(age);
persona.setEdad(10);
console.log(persona.getEdad());
