// inheritance-herencia
class Persona {
  _nombre;
  _apellido;
  _edad;
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  saludo() {
    console.log(
      `Hola, mi nombre es ${this._nombre} ${this._apellido} y tengo ${this._edad} años`
    );
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, edad, lenguaje) {
    super(nombre, apellido, edad);
    this.lenguaje = lenguaje;
  }
  saludo() {
    // -> override
    super.saludo();
    console.log(`Y soy desarrollador de ${this.lenguaje}`);
  }
}
const ndev = new Desarrollador("Luis", "Portillo", 28, "Javascript");
console.log(ndev);
ndev.saludo();

// polimorfísmo  -> varias formas de hacer lo mismo
// sobreescritura de métodos    -> se puede sobreescribir un método de la clase padre en la clase hija
// sobreescritura de atributos  -> se puede sobreescribir un atributo de la clase padre en la clase hija
// sobreescritura de constructores -> se puede sobreescribir un constructor de la clase padre en la clase hija
// sobreescritura de métodos estáticos -> se puede sobreescribir un método estático de la clase padre en la clase hija
// sobreescritura de atributos estáticos -> se puede sobreescribir un atributo estático de la clase padre en la clase hija
// sobreescritura de constructores estáticos -> se puede sobreescribir un constructor estático de la clase padre en la clase hija
// sobreescritura de métodos de instancia -> se puede sobreescribir un método de instancia de la clase padre en la clase hija
// sobreescritura de atributos de instancia -> se puede sobreescribir un atributo de instancia de la clase padre en la clase hija
// sobreescritura de constructores de instancia -> se puede sobreescribir un constructor de instancia de la clase padre en la clase hija
// sobreescritura de métodos de clase -> se puede sobreescribir un método de clase de la clase padre en la clase hija
