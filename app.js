let numeroSecreto = 0;        //Inicio del array en 0
let intentos = 0;               //Inicio del array en 0
let listaNumerosSorteados = []; //Los números almacenados se lista dentro de un arreglo
let numeroMaximo = 10;     //número máximo de intentos para descubrir el número



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  //Asignación de función que viene desde el HTML
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Diste con el número en: ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //Se usa un ternario para la verificación por medio del metódo if
        document.getElementById('reiniciar').removeAttribute('disabled');  // mientras no aciete el número el botón de juego nuevo no esta disponible
    } else {

        if (numeroDeUsuario > numeroSecreto) { //anidación de if para saber si el número es mayor o menor                    
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;      //incrementación de intentos hasta llegar al número de veces
        limpiarCaja();        //limpia el resultado
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;  //función que permite el número random

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) { // si el número sorteado dentro del arreglo es igual al número máxima, ya no hay más números disponibles
        asignarTextoElemento('p','Ya no hay más números posibles (Da F5)');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Encuentra el número!');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
  
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();