// Solo puede tomar apuestas por numeros específicos, exceptuando 0

let idTirada = 0;
let credValue = 100;
const dateTime = luxon.DateTime;
console.log(dateTime);

//Inicializacion de variables
let logTiradas = JSON.parse(localStorage.getItem("logTiradas"));
if(!logTiradas){
    logTiradas=[];
} else {
    let ultimaTirada= logTiradas[logTiradas.length-1];
    credValue = ultimaTirada.creditos;
    idTirada = ultimaTirada.id;
};


// Dibuja credValue
function dibujaCredito (cred){
    let htmlCred = `<span class="navbar-brand mb-0 h1 text-light">Creditos: ${cred}</span>`;
    document.getElementById("htmlCred").innerHTML = htmlCred;
}
dibujaCredito (credValue);

// Funcion simple para generar un número random, simulando la tirada de la ruleta
function numGen() {
    return Math.round (Math.random() * 35 + 1);
};

// Variable de numeros total creada mediante for, para tener de referencia
const numArr = [];
for (let index = 0; index <= 36; index++) {
    numArr.push(index);
};

// Nesteo dos IFs, el primero para validar que el usuario tenga suficientes creditos, el segundo para manejar la tirada.
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
        } else {
            htmlTir = `<h1 class="bg-danger text-light resultadoTirada">¡Perdiste!</h1>`;
            htmlTir += `<h1 class="bg-danger text-light resultadoTirada">${tir}</h1>`;
        }
        dibujaCredito (credValue);
        logTiradas.push({id: idTirada, tirada: tir, elegido: elec, creditos: credValue});
        let logTiradasEnJSON= JSON.stringify(logTiradas)
        localStorage.setItem("logTiradas", logTiradasEnJSON)
    } else {
        htmlTir = `<h1 class="bg-danger text-light resultadoTirada">No tenes suficientes creditos</h1>`
    }
    document.getElementById("resultado").innerHTML = htmlTir;
}


// Tabla creada mediante manejo de DOM, primer FOR para filas, segundo para columnas
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

// Funcion tirada() wrappeada dentro de función anónima porque sino ejecutaba la tirada al cargar la pagina
for (let i = 1; i < numArr.length; i++) {
    let elec = i
    document.getElementById(`boton-${i}`).addEventListener ("click", function() {tirada(elec)}, false);
};