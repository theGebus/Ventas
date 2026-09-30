// Lee los datos del HTML y muestra los resultados.
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").textContent = "USD " + disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("lblCapacidadValor").textContent = "USD " + capacidadPago.toFixed(2);

    let monto = parseInt(document.getElementById("txtMonto").value, 10);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value, 10);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value, 10);
    let interes = calcularInteresSimple(monto, tasa, plazoAnios);
    document.getElementById("lblInteresValor").textContent = "USD " + interes.toFixed(2);
}
