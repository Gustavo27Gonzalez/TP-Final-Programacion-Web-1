// No logro que el formulario se envíe sólo si la validación es correcta
// La idea era validar los campos de inscripcion y una vez validados permitir la inscripcion al curso
function validar(){
    var mensaje =""; //variable que va a almacenar todos los mensajes de error
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    reset();
    if ($(".nombre").val()==""){ /*valida que nombre no este vacio*/
        mensaje+= "<p>El campo nombre es obligatorio </p>";
        error++;
        $(".nombre").addClass('error');
    }
    if($(".apellido").val()==""){
        mensaje+= "<p>El campo apellido es obligatorio </p>";
        error++;
        $(".apellido").addClass('error');
    }

    if(!$(".dni").val().length < 7){
        mensaje+= "<p>Debe ser un dni valido</p>";
        error++;
        $(".dni").addClass('error');
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
    $(".nombre").removeClass('error');
    $(".apellido").removeClass('error');
    $(".dni").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validar();
    });
    $(".nombre").keyup(function() {
        validar();
    });
    $(".apellido").keyup(function() {
        validar();
    });
    $(".dni").keyup(function() {
        validar(".email");
    });
});