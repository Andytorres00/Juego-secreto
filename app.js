/*let titulo = document.querySelector ('h1');
titulo.innerHTML = "Juego del número Secreto";
*/
/*let parrafo = document.querySelector ('p');
parrafo.innerHTML = "Indica un número del 1 al 10"
*/
let numeroSecreto = 0;
let intentos = 0;
//Esta lista almacena numeros sorteados para que no le salgan repetidos al juador
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto)
function asignarTextoElemento ( elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   console.log (intentos)
   if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'} `);
    document.getElementById ('reiniciar').removeAttribute ('disabled')
} else {
    //El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El numero secreto es menor');
    
        }else {
            asignarTextoElemento ('p' , 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja ()
        
   }
    return;
}
function limpiarCaja () {
   /* let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    Esto es lo mismo que resumir
    */
   document.querySelector ('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //pregunta si ya sorteamos todos los numero mostrar mensaje de que ya se sortearon todos los numero
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles')
    }else{ //si no continuamos jugando

    
//si el numero generado esta incluido en la lista hace algo si no se hace otro
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else { //si no esta incluido con push se añade ese nuevo numero
        listaNumerosSorteados.push (numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales () {
    asignarTextoElemento (' h1', 'Juego del número Secreto');
    asignarTextoElemento  ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}
function reiniciarJuego () {
    //Se necesita limpiar la caja para reinicar juego
    limpiarCaja ();
    //Condicionales inciales:Se debe indicar mensaje de incio ose Indica un numero de tal a tal
    //Generar un numero aleatorio
    //Iniciarlizar el numero de intento
    condicionesIniciales ();
    //Se debe desabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute ('disabled','true')
}
    
condicionesIniciales ();
