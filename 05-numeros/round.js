// declaraciones de variables numericas (enteros y con decimales)


let a = 5
console.log(a)


let b = 0.1;
console.log(b)



// precision de valores


let c = 0.2;
let suma= b+c;
console.log(suma)
// da como resultado 0.3000000000004 lo cual es incorrecto.. 
// para ello se utilizan los metodos de precision
console.log(Math.round((0.1+0.2)*100)/100);
// redondea con el round... no es muy util pero se puede usar
