// Funcion simple para generar un número random, simulando la tirada de la ruleta
function ruleta() {
    return Math.round (Math.random() * 36);
};

// Funcion para solicitar al usuario que reingrese el número
function chequeoNumero(x) {
    if ( x < 0 || x > 36 ) {
        console.log('Valor fuera del rango solicitado');
        valorInicial = parseInt(prompt(" El valor ingresado no coincide con los parametros solicitados\n Por favor ingrese un nuevo valor"));
    }
};

// Esta variable la hice así para asociar el número del index con el color correspondiente del número en la ruleta
const colores = [ "Ninguno", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo", "Negro", "Rojo",];

// Queda para mas adelante, todavía no entiendo suficiente para darle esta funcionalidad
// La idea es que el que juega pueda apostar por columnas, filas, colores y demases, y que de pagos como si fuese una ruleta de verdad
// 
// const numeros = [
//     [null,0,null],
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12],
//     [13,14,15],
//     [16,17,18],
//     [19,20,21],
//     [22,23,24],
//     [25,26,27],
//     [28,29,30],
//     [31,32,33],
//     [34,35,36],
// ]

var i = 0;

while (true){
    console.log("Cantidad de tiradas: " + i);
    console.log('Solicitando input al usuario...');
    let valorInicial = parseInt(prompt("Ingrese un número entre 0 y 36"));

    console.log("Validando número...");
    while (valorInicial < 0 || valorInicial > 36 || isNaN(valorInicial)) {
        chequeoNumero(valorInicial);
    };

    console.log('¡Número validado!');
    console.log('El número elegido es ' + valorInicial + '\nEl color del número elegido es ' + colores[valorInicial]);
    console.log('Iniciando tirada...');

    var tirada = ruleta();
    console.log('La tirada fue de ' + tirada + '\nEl color de la tirada fue ' +  colores[tirada]);

    if (valorInicial == tirada) {
        alert("¡Ganaste! La tirada fue " + tirada)
    } else {
        alert('¡Perdiste! La tirada fue ' + tirada)
    };
    i++
};