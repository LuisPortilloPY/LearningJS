const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 18,
  isdeveloper: true,
  lenguajes: ["JavaScript", "Python", "Java"],
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
  saludo: function () {
    console.log("hola");
  },
};
persona.saludar();
persona.saludo();
const otrapersona = {
  nombre: "Maria",
  apellido: "Gomez",
  edad: 25,
  isdeveloper: false,
  despedir: function () {
    console.log(`Adios, soy ${this.nombre} ${this.apellido}`);
  },
  despedirse: function () {
    console.log("adios");
  },
};
otrapersona.despedirse();
otrapersona.despedir();

// const creaPersona = (nombre, apellido, edad, isdeveloper) => {
//   return {
//     nombre: nombre,
//     apellido: apellido,
//     edad: edad,
//     isdeveloper: isdeveloper,
//     saludar: function () {
//       console.log(`Hola, ${this.nombre} ${this.apellido}`);
//     },
//     despedir: function () {
//       console.log(`Adios, ${this.nombre} ${this.apellido}`);
//     },
//   };
// };
// tambien se puede obviar el nombre: nombre porque ya se repite

const creaPersona = (nombre, apellido, edad, isdeveloper) => {
  return {
    nombre,
    apellido,
    edad,
    isdeveloper,
    saludar: function () {
      console.log(`Hola, ${this.nombre} ${this.apellido}`);
    },
    despedir: function () {
      console.log(`Adios, ${this.nombre} ${this.apellido}`);
    },
  };
};
const nuevapersona = creaPersona("Pedro", "Gomez", 30, true);
console.log(nuevapersona);
nuevapersona.saludar();
