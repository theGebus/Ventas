// Lee los datos del HTML y muestra los resultados.
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").textContent = "USD " + disponible.toFixed(2);
}
