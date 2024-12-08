let tarifaSeleccionada = null; // Para almacenar la tarifa seleccionada


function inicializar(){
    document.getElementById('precio').value = "";
}


// Limpiar el formulario y los datos
function limpiar() {
    document.forms['form1'].reset();
    tarifaSeleccionada = null;
    document.getElementById("precio").value = '';
}

// Validación de la fecha de nacimiento
function validaFecha() {
    const fechaRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/; // Expresión regular para validar fecha

    let dia = document.getElementById("dd").value;
    let mes = document.getElementById("mm").value;
    let ano = document.getElementById("aaaa").value;

    // Formatear la fecha como string
    let fechaString = `${dia}/${mes}/${ano}`;

    // Validar con la expresión regular
    if (!fechaRegex.test(fechaString)) {
        alert("Fecha no válida, compruébala");
        return false;
    }

    // Crear el objeto Date para comprobar si la fecha es real
    let fecha = new Date(ano, mes - 1, dia); //Los meses son 11
    let fechaSistema = new Date();

    if (fecha > fechaSistema) {
        alert("La fecha no puede ser mayor a la del sistema");
        document.getElementById("dd").value = "";
        document.getElementById("mm").value = "";
        document.getElementById("aaaa").value = "";
        return false;
    } else {
        calculaEdad(fecha);
    }

    return true;
}

// Calcular la edad en base a la fecha de nacimiento
function calculaEdad(fechaNac) {
    let edad = 0;
    let fechaHoy = new Date();

    edad = fechaHoy.getFullYear() - fechaNac.getFullYear();
    if (fechaHoy.getMonth() < fechaNac.getMonth())
        edad--;
    else if (fechaHoy.getMonth() == fechaNac.getMonth())
        if (fechaHoy.getDate() < fechaNac.getDate())
            edad--;

    if (edad < 18 || edad > 65) {
        document.getElementById('edad').value = edad;
    } else {
        document.getElementById('edad').value = edad;
    }
}

// Llamar a esta función para gestionar la selección de tarifas
function tarifas() {
    const tds = document.querySelectorAll("td");

    tds.forEach(td => {
        td.addEventListener("click", function () {
            // Obtener el valor de la tarifa seleccionada
            tarifaSeleccionada = parseInt(this.getAttribute("data-tarifa"));
            document.getElementById("precio").value = tarifaSeleccionada;  // Actualiza el campo de precio con la tarifa seleccionada
        });
    });
}

// Calcular el precio final con los descuentos
function calcularPrecio() {
    if (!tarifaSeleccionada) {
        alert("Por favor, selecciona una tarifa.");
        return;
    }

    // Validar la fecha antes de continuar
    if (!validaFecha()) {
        return;
    }

    let precio = tarifaSeleccionada;

    // Descuentos
    let edad = parseInt(document.getElementById('edad').value);
    let descuento = 0;

    // Descuento por edad
    if (edad < 18) {
        descuento = 0.2;  // 20% de descuento
        precio = precio - precio * descuento;
    } else if (edad > 65) {
        descuento = 0.3;  // 30% de descuento
        precio = precio - precio * descuento;
    }

    // Descuento por empadronamiento en Leganés (50% de descuento, anula otros descuentos)
    if (document.querySelector('input[name="empadronado"]:checked') && document.querySelector('input[name="empadronado"]:checked').value === "SÍ") {
        precio = tarifaSeleccionada * 0.5;  // Aplica 50% de descuento
    }

    // Descuento por familia numerosa (5€ de descuento)
    if (document.querySelector('input[name="fNumerosa"]:checked') && document.querySelector('input[name="fNumerosa"]:checked').value === "SÍ") {
        precio = precio - 5;  // Descuento de 5€
    }

    // Mostrar el precio final en el campo de texto
    document.getElementById("precio").value = precio.toFixed(2);
}

// Inicializar la selección de tarifas cuando la página se carga
window.onload = function () {
    tarifas();
}
