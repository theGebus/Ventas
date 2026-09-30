# Taller 2 · Simulador de crédito

Proyecto académico de Diego Ortega. Entidad ficticia: **Gebus Capital**.
Abrir `simulador.html` en el navegador o con Live Server. HTML, CSS y JavaScript separados, sin librerías externas.

## Funciones del taller

| Pasos | Función | Regla |
| --- | --- | --- |
| 2–3 | calcularDisponible | Ingresos menos egresos; mínimo cero. |
| 4–5 | calcularCapacidadPago | 50% del disponible. |
| 6–7 | calcularInteresSimple | Años × monto × tasa / 100. |
| 8–9 | calcularTotalPagar | Monto + interés + USD 100. |
| 10–11 | calcularCuotaMensual | Total / (años × 12). |
| 13–14 | aprobarCredito / analizarCredito | Aprobado solo si capacidad > cuota. |

`calcular()` lee ingresos y egresos con `parseFloat`, y monto, plazo y tasa con `parseInt`, como exige el taller. El formulario exige valores no negativos y enteros para los últimos tres campos; monto y plazo deben ser mayores que cero. `reiniciar()` limpia los datos y resultados.

## Inconsistencias del material

- El PDF salta del paso 11 al 13. No se inventó un paso 12.
- Los IDs `spn...` del ZIP se conservan y contienen los componentes `lbl...` que exige el PDF.
- Se implementan ambos nombres: `analizarCredito` llama a `aprobarCredito`.
- La cuota de 2300 / 12 es 191.6666… y se muestra como **USD 191.67**. El PDF dice 191.66; se conserva la fórmula correcta y se redondea con `toFixed(2)`. El otro caso, 4060 / 24, se muestra como USD 169.17.
- La capacidad igual a la cuota rechaza el crédito: el PDF exige estrictamente mayor.

## Git y subida pendiente

El ZIP incluye la carpeta `.git` con el historial real de commits por funcionalidad, comenzando con los archivos originales. No vuelvas a ejecutar `git init` ni borres `.git`. En VS Code abre la carpeta `simulador` extraída y usa:

```bash
git log --oneline --reverse
git status
```

**Todavía no se ha hecho push:** falta elegir o crear un repositorio de destino. Se verificó acceso a la cuenta theGebus, pero no había un repositorio del simulador en los repositorios accesibles. El conector disponible no tiene una operación para crear repositorios.

Para subir a un repositorio nuevo y vacío, creado sin README, licencia ni .gitignore (sustituye TU_REPOSITORIO por su nombre real):

```bash
git remote add origin https://github.com/theGebus/TU_REPOSITORIO.git
git push -u origin main
```

Ese push sube todos los commits, conservando cada etapa. No uses `--force` si el repositorio ya contiene trabajo.

## Vercel: pendiente de publicación

1. Después del push, en Vercel elegir Add New → Project e importar el repositorio del simulador.
2. Framework Preset: Other. Root Directory: la carpeta que contiene `index.html` (raíz si subiste este proyecto directamente).
3. No necesita comando de build ni instalación de dependencias. Output Directory: `.` si lo solicita.
4. Deploy y abrir el enlace para comprobar el formulario.
5. Compartir el enlace publicado en el grupo de WhatsApp del curso.

`index.html` abre `simulador.html` para que la ruta raíz tenga una página de entrada. No se ha publicado en Vercel ni enviado ningún mensaje a WhatsApp.

## Parte visual

Logo SVG original, colores azul marino y verde petróleo, formulario adaptable a celular, tablet y PC. El prompt original y la especificación visual utilizada están en `prompts.txt`.

## Verificación realizada

Se ejecutaron pruebas con Node.js y un DOM simulado para los casos del PDF: disponible, capacidad, interés, total, cuota, mensajes de aprobación/rechazo, igualdad rechazada y reinicio. También se verificaron los IDs y las funciones de los commits intermedios. Las pruebas pasaron con la corrección de redondeo explicada arriba.

La comprobación visual en navegador quedó pendiente: no había un navegador local instalado y falló su descarga. El CSS contiene adaptaciones a 850 px y 480 px; esto no sustituye una prueba visual en dispositivos.
