// Funciones de negocio: reciben datos, calculan y retornan resultados.

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    if (disponible < 0) {
        return 0;
    }
    return disponible;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.50;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 100;
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    return total / meses;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    }
    return false;
}

// El paso 14 usa otro nombre: delegamos en la funcion del paso 13.
function analizarCredito(capacidadPago, cuotaMensual) {
    return aprobarCredito(capacidadPago, cuotaMensual);
}
