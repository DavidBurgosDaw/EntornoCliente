function validarFecha() {
    fecha = document.getElementById("fec").value;    
    // Obtener la fecha actual
    let hoy = new Date();
    
    // Convertir la fecha introducida en un objeto Date
    let fechaIntroducida = new Date(fecha);
    
    // Calcular la fecha límite (hoy + 30 días)
    let fechaLimite = new Date(hoy);
    fechaLimite.setDate(hoy.getDate() + 30);
    
    // Verificar que la fecha esté dentro del rango (hoy y dentro de 30 días)
    if (fechaIntroducida < hoy || fechaIntroducida > fechaLimite) {
        alert("La fecha debe estar entre hoy y dentro de 30 días.");
        return false;
    }
    
    // Verificar que no sea sábado (6) ni domingo (0)
    let diaSemana = fechaIntroducida.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
        alert("La fecha no puede ser un sábado ni un domingo.");
        return false;
    }
    
    return true;
}