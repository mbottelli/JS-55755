// Solo puede tomar apuestas por numeros específicos, exceptuando 0

// Inicializacion de variables
let idTirada = 0;
let credValue = 100;
const dateTime = luxon.DateTime;
let numElegido;

// Busca en el storage por los creditos que anteriormente tenia el usuario
let logTiradas = JSON.parse(localStorage.getItem("logTiradas"));
    if(!logTiradas){
        logTiradas=[];
    } else {
        let ultimaTirada= logTiradas[logTiradas.length-1];
        credValue = ultimaTirada.creditos;
        idTirada = ultimaTirada.id;
    };
console.log(`¡Variables inicializadas!\nidTirada: ${idTirada}\ncreditos: ${credValue}`);

// Funcion simple para generar un número random, simulando la tirada de la ruleta
function numGen() {
    return Math.round (Math.random() * 35 + 1);
};

// Variable de numeros total creada mediante for, para tener de referencia
const numArr = [];
    for (let index = 0; index <= 36; index++) {
        numArr.push(index);
    };

// Dibuja cuantos creditos tiene el usuario
function dibujaCredito (cred){
    let htmlCred = `Creditos: ${cred}`;
    document.getElementById("credSpan").innerHTML = htmlCred;
}
dibujaCredito (credValue);

// Intervalo para realizar la tirada cada 1 minuto, parsea el numero elegido a la funcion de tirada, y limpia el numero elegido una vez finalizado. Si no se elige un numero, no realiza tirada
setInterval(() => {
    let timer = 60 - dateTime.now().second;
    let htmlTimer = `Proxima: ${timer}s`;
    document.getElementById("timeSpan").innerHTML = htmlTimer
    if (timer == 60 && numElegido){
        tirada(numElegido)
        numElegido = undefined;
        setTimeout(() => {
            document.getElementById("htmlElegido").innerHTML = "";
        }, 10000);
    };
}, 1000);

// Funcion general que realiza la tirada, verifica si coincide con la eleccion del usuario, modifica la cantidad de creditos acorde y guarda los valores de la tirada al log
function tirada (elec){
    let htmlTir;
    let tir;
    if (credValue >= 5) {
        credValue -= 5;
        tir = numGen();
        console.log('Tirada es '+tir+' y elec es '+elec)
        idTirada++;
        if (tir == elec) {
            credValue += 50;
            htmlTir = `<h1 class="bg-success text-light resultadoTirada">¡Ganaste!</h1>`;
            htmlTir += `<h1 class="bg-success text-light resultadoTirada">${tir}</h1>`;
        } else if (tir != elec) {
            htmlTir = `<h1 class="bg-danger text-light resultadoTirada">¡Perdiste!</h1>`;
            htmlTir += `<h1 class="bg-danger text-light resultadoTirada">${tir}</h1>`;
        } else {
            htmlTir = "";
        };
        dibujaCredito (credValue);
        logTiradas.push({id: idTirada, tirada: tir, elegido: elec, creditos: credValue});
        localStorage.setItem("logTiradas", JSON.stringify(logTiradas));
    } else {
        htmlTir = `<h1 class="bg-danger text-light resultadoTirada">No tenes suficientes creditos</h1>`
    }
    document.getElementById("resultado").innerHTML = htmlTir;
    setTimeout(() => {
        document.getElementById("resultado").innerHTML = "";
    }, 10000);
}



// Tabla creada mediante manejo de DOM para elegir un número, primer FOR para filas, segundo para columnas
function creaTabla() {
    let htmlTabla = '<div class="row g-0">';
    for (let i = 1; i <= 3; i++) {
        htmlTabla += '<div class="col">';
        htmlTabla += '<div class="btn-group me-2" role="group" aria-label="First group">';
        for (let o = 0+i; o < numArr.length; o += 3) {
            htmlTabla +=`<button id="boton-${o}" type="button" class="btn btn-secondary">${o}</button>`;
        }
        htmlTabla += '</div>';
        htmlTabla += '</div>';
    };
    htmlTabla += '</div>';
    document.getElementById("tablaRuleta").innerHTML = htmlTabla;
};
creaTabla();

// Añade las funciones a los botones creados mediante creaTabla(), separado para manejarlo con mas comodidad
for (let i = 1; i < numArr.length; i++) {
    let elec = i
    document.getElementById(`boton-${i}`).addEventListener ("click", function() {
        numElegido = elec;
        console.log("El número elegido es "+numElegido);
        let htmlElec = `<h1 class="bg-dark text-light">El número elegido es ${numElegido}</h1>`;
        document.getElementById("htmlElegido").innerHTML = htmlElec;
    }, false);
};