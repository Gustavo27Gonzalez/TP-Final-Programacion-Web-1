'use strict'
// Validacion del formulario de contacto. La página de contacto funciona y me envía un mail con los datos validados ingresados en los campos
function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos
    var valtelef = /^\d{4}[-]?\d{4}$/;
    var mensaje =""; //variable que va a almacenar todos los mensajes de error
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    reset();
    if ($("#nombre").val()==""){ /*valida que nombre no este vacio*/
        mensaje+= "<p>El campo nombre es obligatorio </p>";
        error++;
        $("#nombre").addClass('error');
    }
    if($("#apellido").val()==""){
        mensaje+= "<p>El campo apellido es obligatorio </p>";
        error++;
        $("#apellido").addClass('error');
    }

    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }
    
    if(!$("#tel").val().match(valtelef)){
        mensaje+= "<p>El formato válido es 12345678 o 1234-5678</p>";
        error++;
        $("#tel").addClass('error');
    }

    /*Si error es mayor a 0 retorna falso y muestra todo los mensajes de errores acumulado en la variable mensaje*/
    if (error>0){
        
        $("#mensaje").append(mensaje); //agregamos al div de id mensaje, los mensajes de error acumulados en la variable mensaje
        return false;
    }
    /*Sino retorna verdadero y el formulario se envía*/
    else{
        return true;
    }

}
function reset(){ /*Esta funciona elimina todas las clases de error*/
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#tel").removeClass('error');
    $("#email").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validar();
    });
    $("#nombre").keyup(function() {
        validar();
    });
    $("#apellido").keyup(function() {
        validar();
    });
    $("#tel").keyup(function() {
        validar("#tel");
    })
    $("#email").keyup(function() {
        validar("#email");
    });
});

const mensaje = document.getElementById('mensaje-textarea');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});