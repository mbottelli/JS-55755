// Solo puede tomar apuestas por numeros específicos, exceptuando 0

// let dinero = 50000

// Funcion simple para generar un número random, simulando la tirada de la ruleta
function numGen() {
    return Math.round (Math.random() * 35 + 1);
};

// Variable de numeros total creada mediante for, para tener de referencia
const numArr = [];
for (let index = 0; index <= 36; index++) {
    numArr.push(index);
};

function tirada (elec){
    let tir = numGen();
    console.log('Tirada es '+tir+' y elec es '+elec)
    if (tir == elec) {
        let htmlTir = `<h1 class="bg-success text-light resultadoTirada">¡Ganaste!</h1>`;
        htmlTir += `<h1 class="bg-success text-light resultadoTirada">${tir}</h1>`;
        document.getElementById("resultado").innerHTML = htmlTir;
    } else {
        let htmlTir = `<h1 class="bg-danger text-light resultadoTirada">¡Perdiste!</h1>`;
        htmlTir += `<h1 class="bg-danger text-light resultadoTirada">${tir}</h1>`;
        document.getElementById("resultado").innerHTML = htmlTir;
    }
}


// Tabla creada mediante manejo de DOM, primer FOR para filas, segundo para columnas
// Me falta encajarle el 0 y que se vea bien
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

// Variables de colores para consultar apuestas por color
// const rojoArr = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
// const negroArr = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];