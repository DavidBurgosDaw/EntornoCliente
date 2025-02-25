// Petición AJAX para cargar el contenido de pokemon.txt en el div principal
$.ajax({
    url: 'pokemon.txt',
    type: 'get',
    dataType: 'text', // Se especifica que se espera texto
    success: function(data) {
        // Se carga el contenido del archivo en el div #principal
        $("#principal").html(data);
        
        // Desactivar el click del botón "AVANZAR"
        // Opción 1: Deshabilitar el botón
        $("#uno").prop("disabled", true);
        
        // Opción 2 (alternativa): Quitar el evento click si se hubiera asignado
        // $("#uno").off("click");
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error al cargar el archivo: " + textStatus, errorThrown);
        $("#principal").html("<h4>Error: No se pudo cargar la información del Pokémon.txt</h4>");
    }
});
