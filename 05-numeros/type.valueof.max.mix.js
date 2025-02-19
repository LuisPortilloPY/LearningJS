// tipos de operadores .valueOf()- obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(typeof (a + b));
console.log(typeof b);
console.log(typeof a);
console.log(b.valueOf());
console.log(a.valueOf());
let str = new String("hola soy un string");
console.log(str.valueOf());
console.log(typeof str);
console.log(str);

// NaN (not a number)-infinity
let n = Number("adios");
console.log(typeof n);
console.log(isNaN(n));

// isNaN pa saber si es un numero
let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);
let division = numerador / divisor;
division = division.toString();
console.log(division);

// Como convertir los strings a valores numericos con mumber parseInt y parseFloat
let numero = "5.89";
console.log(typeof numero);
let num2 = 17.2;
console.log(numero + num2);

console.log(typeof numero);
// el operador number permite convertir la variable string a number directamente eje:
console.log(Number(numero) + num2);
// ahora lo mismo con parseINT pero lo hace entero
let abc = 20.43;
let ab = "20.45";
console.log(parseInt(abc));
console.log(parseFloat(abc));
console.log(typeof parseFloat(ab));
console.log(typeof parseInt(ab));

// parsefloat como int convierte tambien el string a numeros

// Numeros hexadecimales
let numHex = "0x3a5b7";
console.log(parseInt(numHex));

// como obtener los valores maximo y minimo en js

let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;
console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
