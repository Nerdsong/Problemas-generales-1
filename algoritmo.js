const UN_SEGUNDO = 1000;
const SONIDO_ALARMA = new Audio('./sonido/soloFKJ.mp3');

let contador = 1; // hace el conteo de las veces que se ejecuta la función
let segundosUsuario = "00" //cantidad de segundos establecida por el usuario. 
let minutosUsuario = "00"
let horasUsuario = "00"
let segundero = "aca va la función "

function iniciarTemporizador(){
    
    detenerConteo()
    horasUsuario = document.querySelector("#input_horas").value;
    minutosUsuario = document.querySelector("#input_minutos").value;
    segundosUsuario = document.querySelector("#input_segundos").value;
    funcionRepetir()
    segundero = setInterval(funcionRepetir, UN_SEGUNDO);

}

function detenerConteo(){

    clearInterval(segundero);

}

function resetear(){
    detenerConteo()
    SONIDO_ALARMA.pause()
    horasUsuarioConCeroAnadido = "0"+ 0
    minutosUsuarioConCeroAnadido = "0"+ 0
    segundosUsuarioConCeroAnadido = "0"+ 0
    document.querySelector("#valores_activos").innerHTML=`
    ${horasUsuarioConCeroAnadido}:${minutosUsuarioConCeroAnadido}:${segundosUsuarioConCeroAnadido}`
}

//variables de comparación para mostrar el cero en números de 1 solo digito
let segundosUsuarioConCeroAnadido = "valor de 0 + segundos usuario"
let minutosUsuarioConCeroAnadido = "valor de 0 + minutos usuario"
let horasUsuarioConCeroAnadido = "valor de 0 + horas usuario"

function mostrarValoresNuméricos(){
    document.querySelector("#valores_activos").innerHTML=``
    segundosUsuarioConCeroAnadido = segundosUsuario;
    minutosUsuarioConCeroAnadido = minutosUsuario;
    horasUsuarioConCeroAnadido = horasUsuario;
    if(segundosUsuario < 10 && segundosUsuario > -1){
        segundosUsuarioConCeroAnadido = "0"+segundosUsuario    
    }

    if (minutosUsuario < 10 && minutosUsuario > -1){
        minutosUsuarioConCeroAnadido = "0"+minutosUsuario
    }

    if (horasUsuario < 10 && horasUsuario > -1){
        horasUsuarioConCeroAnadido = "0"+horasUsuario
    }

    document.querySelector("#valores_activos").innerHTML=`
    ${horasUsuarioConCeroAnadido}:${minutosUsuarioConCeroAnadido}:${segundosUsuarioConCeroAnadido}` 

}

function funcionRepetir(){
    
    mostrarValoresNuméricos()

    if (segundosUsuario == 0 && minutosUsuario == 0 && horasUsuario == 0){
        document.querySelector("#valores_activos").innerHTML=`Fin`
        SONIDO_ALARMA.play()
        SONIDO_ALARMA.loop = true;
        clearInterval(segundero)
    }
    else if (segundosUsuario == 0 && minutosUsuario !=0){
        minutosUsuario --;
        segundosUsuario = 59;
    }
    else if (segundosUsuario == 0 && minutosUsuario == 0 && horasUsuario !=0){
        horasUsuario --;
        minutosUsuario = 59;
        segundosUsuario = 59;
    }
    else{
        segundosUsuario --;
    }
}




