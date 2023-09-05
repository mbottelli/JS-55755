function chequeoNumero(x) {
    if (x < 1 || x > 10) {
        console.log('Número fuera del rango solicitado');
        numeroInicial = parseInt(prompt(" El número ingresado no es un número entre 1 y 10\n Por favor ingrese un número entre 1 y 10"));
    } else {
        console.log('No es un número');
        numeroInicial = parseInt(prompt(" El valor que ingreso no es un número\n Por favor ingrese un número entre 1 y 10"));
    }
};

console.log('Solicitando número al usuario...');
let numeroInicial = parseInt(prompt("Ingrese un número entre 1 y 10"));

console.log("Validando número...");
while (numeroInicial < 1 || numeroInicial > 10 || isNaN(numeroInicial)) {
    chequeoNumero(numeroInicial);
};

console.log('¡Número validado! Iniciando iteración...');
let numeroAgregado = numeroInicial;
let index = 0;
console.log(numeroInicial);
while (numeroAgregado < 100) {
    numeroAgregado = numeroAgregado + 5;
    console.log(numeroAgregado);
    index++;
};

console.log(` Número inicial: ${numeroInicial}\n Cantidad de iteraciones: ${index}\n Número final: ${numeroAgregado}`);
alert(` Número inicial: ${numeroInicial}\n Cantidad de iteraciones: ${index}\n Número final: ${numeroAgregado}`);
