// Lee los datos del HTML y muestra los resultados.
function calcular() {
    if (!validarFormulario()) {
        limpiarResultados();
        return;
    }

    let ingresos = leerNumero("txtIngresos");
    let egresos = leerNumero("txtEgresos");
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").textContent = "USD " + disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("lblCapacidadValor").textContent = "USD " + capacidadPago.toFixed(2);

    let monto = parseInt(document.getElementById("txtMonto").value, 10);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value, 10);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value, 10);
    let interes = calcularInteresSimple(monto, tasa, plazoAnios);
    document.getElementById("lblInteresValor").textContent = "USD " + interes.toFixed(2);

    let total = calcularTotalPagar(monto, interes);
    document.getElementById("lblTotalValor").textContent = "USD " + total.toFixed(2);

    let cuotaMensual = calcularCuotaMensual(total, plazoAnios);
    document.getElementById("lblCuotaValor").textContent = "USD " + cuotaMensual.toFixed(2);

    let aprobado = analizarCredito(capacidadPago, cuotaMensual);
    let estado = document.getElementById("spnEstadoCredito");
    if (aprobado) {
        estado.textContent = "CREDITO APROBADO";
        estado.className = "aprobado";
    } else {
        estado.textContent = "CREDITO RECHAZADO";
        estado.className = "rechazado";
    }
}

// Limpia los campos y devuelve los resultados a su estado inicial.
function reiniciar() {
    document.getElementById("formCredito").reset();
    limpiarErrores();
    limpiarResultados();
    document.getElementById("txtIngresos").focus();
}

function limpiarResultados() {
    document.getElementById("lblDisponibleValor").textContent = "USD 0.00";
    document.getElementById("lblCapacidadValor").textContent = "USD 0.00";
    document.getElementById("lblInteresValor").textContent = "USD 0.00";
    document.getElementById("lblTotalValor").textContent = "USD 0.00";
    document.getElementById("lblCuotaValor").textContent = "USD 0.00";
    let estado = document.getElementById("spnEstadoCredito");
    estado.textContent = "LISTO PARA SIMULAR";
    estado.className = "pendiente";
}

// Si cambian los datos, la simulación anterior deja de estar vigente.
document.getElementById("formCredito").addEventListener("input", limpiarResultados);
