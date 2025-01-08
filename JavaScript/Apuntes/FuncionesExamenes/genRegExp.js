function generarRegexAvanzado(descripcion) {
    // Convertimos la descripción en minúsculas para comparación sencilla
    descripcion = descripcion.toLowerCase();

    // Buscamos patrones específicos basados en palabras clave
    if (descripcion.includes("dni")) {
        // Validación avanzada de DNI español, incluyendo letra correcta
        return /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/;
    } else if (descripcion.includes("correo electrónico")) {
        // Validación avanzada de correos electrónicos
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    } else if (descripcion.includes("número de teléfono")) {
        // Internacional, admite +, guiones, paréntesis y espacios
        return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    } else if (descripcion.includes("solo letras")) {
        // Cualquier combinación de letras (sin números ni símbolos)
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
    } else if (descripcion.includes("solo números")) {
        // Solo dígitos
        return /^\d+$/;
    } else if (descripcion.includes("fecha")) {
        // Fecha en formato dd/mm/aaaa
        return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    } else if (descripcion.includes("código postal")) {
        // Código postal (formato común en muchos países)
        return /^\d{5}(?:[-\s]\d{4})?$/;
    } else if (descripcion.includes("url")) {
        // Validación avanzada de URLs
        return /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-z]{2,}(\/[^\s]*)?$/;
    } else if (descripcion.includes("clave fuerte")) {
        // Clave con mínimo 8 caracteres, al menos una letra mayúscula, una minúscula, un número y un símbolo
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    } else {
        // Si no se reconoce el patrón, retornamos un mensaje de error
        return "No se pudo generar una expresión regular para la descripción proporcionada.";
    }
}

// Ejemplo de uso avanzado:
const descripcion = prompt("Describe lo que quieres validar (por ejemplo: 'clave fuerte', 'dni español', 'url', etc.)");
const regex = generarRegexAvanzado(descripcion);
console.log("Tu expresión regular generada es:", regex);
