class persona {
  nombre;
  apellido;
  edad;
  isDeveloper;
  constructor(nombre, edad, apellido, isDeveloper) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(
      `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }
}
// metodo contrusctor para inicializar las propiedades de la clase
// metodo saludo para imprimir un mensaje en consola

// como crear una persona con un nombre y edad con la palabra reservadaa new

const nueva_persona = new persona("Juan", "Perez", 25, true);

nueva_persona.saludo();
let numero = 60; // variable numero inicializada
let persona_2 = new persona("Pedro", "Perez", 30, false); // objeto persona_2 instanciando.
console.log(typeof numero);
console.log(typeof persona_2);

console.log(persona_2 instanceof persona);
console.log(numero instanceof persona);
console.log(persona_2 instanceof Object);
// operador instaceof -> similar al typeoF  pero para clases
