console.log("Teste 1");

var lg = "Life is good";

console.log(lg);

function factorial(numero) {
    var fact = 1;
    for (let i = 2; i <= numero; i++) {
        fact *= i;
    }
    return fact;
}

function pow(base, potencia) {
    var p = 1;
    for (let i = 1; i <= potencia; i++) {
        p *= base;
    }
    return p;
}

//Recursion pow
function recursion_pow(base, exp) {
    if (exp == 0)
        return 1;
    return base * recursion_pow(base, exp - 1);
}

console.log("mark");