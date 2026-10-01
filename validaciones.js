// Reglas del proyecto académico; no representan políticas de un banco.
const reglas = [
    { id: "txtIngresos", nombre: "Los ingresos", min: 0.01, max: 1000000, decimales: true },
    { id: "txtEgresos", nombre: "Los egresos", min: 0, max: 1000000, decimales: true },
    { id: "txtMonto", nombre: "El monto", min: 100, max: 500000, decimales: false },
    { id: "txtPlazo", nombre: "El plazo", min: 1, max: 30, decimales: false },
    { id: "txtTasaInteres", nombre: "La tasa", min: 0, max: 50, decimales: false }
];

function leerNumero(id) {
    return Number(document.getElementById(id).value.trim().replace(",", "."));
}

function mostrarError(id, mensaje) {
    document.getElementById("error-" + id).textContent = mensaje;
    document.getElementById(id).setAttribute("aria-invalid", "true");
}

function limpiarErrores() {
    for (let regla of reglas) {
        document.getElementById("error-" + regla.id).textContent = "";
        document.getElementById(regla.id).removeAttribute("aria-invalid");
    }
    document.getElementById("resumenErrores").textContent = "";
}

function validarFormulario() {
    limpiarErrores();
    let errores = [];
    for (let regla of reglas) {
        let texto = document.getElementById(regla.id).value.trim();
        let numero = leerNumero(regla.id);
        let mensaje = "";
        // Se acepta punto o coma decimal, sin separadores de miles.
        let formato = regla.decimales ? /^\d+([.,]\d{1,2})?$/ : /^\d+$/;
        if (texto === "") {
            mensaje = "Este campo es obligatorio.";
        } else if (!formato.test(texto) || !Number.isFinite(numero)) {
            mensaje = regla.decimales
                ? "Ingresa un número positivo o cero, con hasta 2 decimales y sin separadores de miles."
                : "Ingresa un número entero positivo o cero, sin letras ni decimales.";
        } else if (numero < regla.min || numero > regla.max) {
            mensaje = regla.nombre + (regla.id === "txtIngresos" || regla.id === "txtEgresos" ? " deben estar entre " : " debe estar entre ") + regla.min.toLocaleString("es-EC") + " y " + regla.max.toLocaleString("es-EC") + ".";
        }
        if (mensaje !== "") {
            mostrarError(regla.id, mensaje);
            errores.push(regla.id);
        }
    }
    // Comparar únicamente si ambos importes ya pasaron sus validaciones.
    if (!errores.includes("txtIngresos") && !errores.includes("txtEgresos") && leerNumero("txtEgresos") > leerNumero("txtIngresos")) {
        mostrarError("txtEgresos", "Los egresos no pueden superar los ingresos mensuales.");
        errores.push("txtEgresos");
    }
    if (errores.length > 0) {
        document.getElementById("resumenErrores").textContent = "Revisa los " + errores.length + " campos señalados para continuar.";
        document.getElementById(errores[0]).focus();
        return false;
    }
    return true;
}
