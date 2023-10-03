// Para algunas cosas de este proyecto tomé inspiración de "https://dev.to/ozboware/one-way-to-make-roulette-using-javascript-part-1-41eb"
// Para no plagiar, solo tomé algunas ideas y reducí la complejidad de la ruleta
// Solo puede tomar apuestas por numeros específicos y por color

// Funcion simple para generar un número random, simulando la tirada de la ruleta
function ruleta() {
    return Math.round (Math.random() * 36);
};

// Funcion para solicitar al usuario que reingrese el número
function chequeoNumero() {
    console.log('Valor fuera del rango solicitado');
    return parseInt(prompt(" El valor ingresado no coincide con los parametros solicitados\n Por favor ingrese un nuevo valor"));
};

// Variable de numeros total creada mediante for, para tener de referencia
const numeros = [];
for (let index = 0; index <= 36; index++) {
    numeros.push(index);
};
// Variables de colores para consultar apuestas por color
const rojoArr = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const negroArr = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

let dinero = 50000

let dineroPrint = document.



for (i in numeros) {
    
}


var indexTirada = 0;

// Creo un loop para el proceso se repita indefinidamente, eventualmente lo voy a reemplazar con otra cosa que sea mas adecuada

// while (true){
//     console.log("Cantidad de tiradas: " + indexTirada);
//     console.log('Solicitando input al usuario...');
//     let valorInicial = parseInt(prompt("Ingrese un número entre 0 y 36"));

//     // Únicamente para validar que es un número entre 0 y 36, eventualmente esto va a dejar de ser un prompt y tendría una interfaz donde el usuario pueda elegir con un click.
//     console.log("Validando número...");
//     while (valorInicial < 0 || valorInicial > 36 || isNaN(valorInicial)) {
//         valorInicial = chequeoNumero();
//     };

//     console.log('¡Número validado!');
//     console.log('El número elegido es ' + valorInicial + '\nEl color del número elegido es ' + colores[valorInicial]);
//     console.log('Iniciando tirada...');

//     // Probando encontré que para poder retener sin lugar a dudas el valor random, lo mejor era asociarlo a una variable apenas se invoca la función.
//     var tirada = ruleta();
//     console.log('La tirada fue de ' + tirada + '\nEl color de la tirada fue ' +  colores[tirada]);

//     if (valorInicial == tirada) {
//         alert("¡Ganaste! La tirada fue " + tirada)
//     } else {
//         alert('¡Perdiste! La tirada fue ' + tirada)
//     };
//     indexTirada++
// };