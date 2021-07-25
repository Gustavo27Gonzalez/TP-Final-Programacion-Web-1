// Contador Carrito
// El localstorage guarda la cantidad de cursos, pero si actualizo o cambio de página no borra al querer quitar un curso añadido antes de actualizar
// Funciona mejor sin el localStorage de momento

//let miStorage = window.localStorage;
//let contadorCarrito = miStorage.getItem("cursos");
let contadorCarrito = 0;
let contadorVecesAgregadoCursoJava = 0;
let contadorVecesAgregadoCursoCPlusPlus = 0;
let contadorVecesAgregadoCursoKotlin = 0;
let contadorVecesAgregadoCursoPython = 0;
let contadorVecesAgregadoCursoNode = 0;
let contadorVecesAgregadoCursoPWeb = 0;
/*
$(document).ready(function(){
    if(contadorCarrito!=0){
        document.getElementById("numCarrito").style.display="block";
        document.getElementById("numCarrito").innerHTML=(contadorCarrito);
    }

    $(".ponerEnCeroElContador").click(function(evn){
        ponerEnCeroElContador();
    });
})
*/
/*
function ponerEnCeroElContador(){
    let miStorage = window.localStorage;
	let contadorCarrito = 0;
    miStorage.setItem("cursos", contadorCarrito);
    document.getElementById("numCarrito").innerHTML = contadorCarrito;
}
*/

function agregarCursoJavaAlCarrito(){
    if(contadorVecesAgregadoCursoJava==0 && contadorVecesAgregadoCursoJava<1){
        contadorVecesAgregadoCursoJava++;
        agregarAcarrito();
    }
}

function agregarCursoCPlusPlusAlCarrito(){
    if(contadorVecesAgregadoCursoCPlusPlus==0 && contadorVecesAgregadoCursoCPlusPlus<1){
        contadorVecesAgregadoCursoCPlusPlus++;
         agregarAcarrito();
    }
}

function agregarCursoKotlinAlCarrito(){
    if(contadorVecesAgregadoCursoKotlin==0 && contadorVecesAgregadoCursoKotlin<1){
        contadorVecesAgregadoCursoKotlin++;
         agregarAcarrito();
    }
}

function agregarCursoPythonAlCarrito(){
    if(contadorVecesAgregadoCursoPython==0 && contadorVecesAgregadoCursoPython<1){
        contadorVecesAgregadoCursoPython++;
         agregarAcarrito();
    }
}

function agregarCursoNodeAlCarrito(){
    if(contadorVecesAgregadoCursoNode==0 && contadorVecesAgregadoCursoNode<1){
        contadorVecesAgregadoCursoNode++;
         agregarAcarrito();
    }
}

function agregarCursoPWebAlCarrito(){
    if(contadorVecesAgregadoCursoPWeb==0 && contadorVecesAgregadoCursoPWeb<1){
        contadorVecesAgregadoCursoPWeb++;
         agregarAcarrito();
    }
}

function quitarCursoJavaDelCarrito(){
    if(contadorVecesAgregadoCursoJava==1){
        contadorVecesAgregadoCursoJava--;
         quitarDeCarrito();
    }
}

function quitarCursoCPlusPlusDelCarrito(){
    if(contadorVecesAgregadoCursoCPlusPlus==1){
        contadorVecesAgregadoCursoCPlusPlus--;
         quitarDeCarrito();
    }
}

function quitarCursoKotlinDelCarrito(){
    if(contadorVecesAgregadoCursoKotlin==1){
        contadorVecesAgregadoCursoKotlin--;
         quitarDeCarrito();
    }
}

function quitarCursoPythonDelCarrito(){
    if(contadorVecesAgregadoCursoPython==1){
        contadorVecesAgregadoCursoPython--;
         quitarDeCarrito();
    }
}

function quitarCursoNodeDelCarrito(){
    if(contadorVecesAgregadoCursoNode==1){
        contadorVecesAgregadoCursoNode--;
         quitarDeCarrito();
    }
}

function quitarCursoPWebDelCarrito(){
    if(contadorVecesAgregadoCursoPWeb==1){
        contadorVecesAgregadoCursoPWeb--;
         quitarDeCarrito();
    }
}

function agregarAcarrito(){ 
    /* let miStorage = window.localStorage;
    let contadorCarrito = miStorage.getItem("cursos");*/
    contadorCarrito++;
    document.getElementById("numCarrito").style.display="block";
    document.getElementById("numCarrito").innerHTML=(contadorCarrito);
    //miStorage.setItem("cursos", contadorCarrito);
}

function quitarDeCarrito(){
    if (contadorCarrito>0){
        /* let miStorage = window.localStorage;
        let contadorCarrito = miStorage.getItem("cursos");*/
        contadorCarrito--;
        document.getElementById("numCarrito").innerHTML=(contadorCarrito);
        //miStorage.setItem("cursos", contadorCarrito);
    }
    if(contadorCarrito==0){
        document.getElementById("numCarrito").style.display="none";
    }
}