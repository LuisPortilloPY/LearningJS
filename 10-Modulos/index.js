function suma(x,y) {
    return x+y;
}
function multiplicacion(x,y) {
    return x*y;
}
function elevar(x,y) {
    return x**y;
}
function factorial(x) {
    let fact
    fact = 1;   
    for(let i=2; i<=x; i++) {
        fact *= i;
    }
    return fact;
}
module.exports = {
    suma,
    multiplicacion,
    elevar,
    factorial
}
const fact = factorial(5)
console.log(fact)
const sum=suma(5,5)
console.log(sum)
