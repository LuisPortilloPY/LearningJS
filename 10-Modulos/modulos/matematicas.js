function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
function factorial(n) {
    if (n < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    factorial,
    potencia,
};