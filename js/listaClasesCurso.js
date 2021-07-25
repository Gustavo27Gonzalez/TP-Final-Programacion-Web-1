// Mostrar y ocultar las clases de cada unidad del curso
$(".temas-clases-curso").click(function(){
    $(this).children("ol").slideToggle();
})