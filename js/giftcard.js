// js de la página de personalizacion de giftcard

let nombre = "";

function mostrarNombre(){
    nombre = document.getElementById("nombre").value;
    document.getElementById("destinatario").innerHTML = nombre;
}

let colFuenteDest = document.getElementById("destinatario");
let colFuenteMonto = document.getElementById("monto-giftcard");
function colorFuente(option){
    colFuenteDest.style.color = option;
    colFuenteMonto.style.color = option; 
}

let tamFuenteDest = document.getElementById("destinatario");
let tamFuenteMonto = document.getElementById("monto-giftcard");
function tamanioFuente(option){
    tamFuenteDest.style.fontSize = option;
    tamFuenteMonto.style.fontSize = option;
}

let monto = "";
function mostrarMonto(){
    monto = document.getElementById("monto").value;
    document.getElementById("monto-giftcard").innerHTML = "$ "+ monto;
}

let colFondoDest = document.getElementById("fondoGiftcard");
function colorDeFondo(option){
    colFondoDest.style.backgroundColor = option;
}


$("input[name=subtitulo]").change(function(){
    if(this.value == 1 ){
     $(".imagen_re").css("align-items","flex-end");
     $(".imagen_re").css("justify-content","flex-end");
    }else if(this.value == 2){
     $(".imagen_re").css("align-items","start");
     $(".imagen_re").css("justify-content","flex-start");
    }else{
     $(".imagen_re").css("align-items","start");
     $(".imagen_re").css("justify-content","flex-end");
    }
})