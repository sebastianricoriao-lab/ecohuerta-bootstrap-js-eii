// =============================================================
// EcoHuerta — Laboratorio 1 — js/fundamentos.js
// Prácticas 1.1 a 1.5. Cada ejercicio va dentro de un bloque { }
// para poder reutilizar nombres sin que JavaScript marque
// "Identifier has already been declared".
// Las líneas "// Predicción:" se escribieron ANTES de ejecutar.
// =============================================================

console.log("EcoHuerta: JavaScript conectado correctamente.");

// -------------------------------------------------------------
// Práctica 1.1 — Primera ejecución y consola
// -------------------------------------------------------------
{
  // Predicción: 13 (suma numérica) y "85" (concatenación, porque "8" es texto).
  console.log("Bienvenido a EcoHuerta");
  console.log(8 + 5);      // 13
  console.log("8" + 5);    // "85"
  console.warn("Este cultivo necesita revisión");

  // Actividad 1: nombre y cultivo en instrucciones distintas
  console.log("Nombre: Estudiante EcoHuerta"); // cambia por tu nombre
  console.log("Cultivo: Tomate");

  // Actividad 2: 4 filas x 7 plantas
  console.log("Plantas totales:", 4 * 7); // 28

  // Actividad 3: 8 plantas x 2 litros
  console.log("Litros de riego:", 8 * 2); // 16

  // Actividad 4: operadores
  console.log(20 / 4);  // 5  -> división
  console.log(20 % 6);  // 2  -> residuo (módulo) de 20 entre 6
  console.log(2 ** 3);  // 8  -> potencia (2 elevado a 3)

  // Actividad 5:
  // Un error (rojo) lo genera el navegador/motor cuando algo falla y suele
  // detener la ejecución; una advertencia con console.warn() la envío yo a
  // propósito, es solo informativa y el programa continúa.

  // Depuración: el original era console.log("Cultivo registrado);
  // Faltaba la comilla de cierre -> SyntaxError: Invalid or unexpected token.
  console.log("Cultivo registrado"); // corregido
}

// -------------------------------------------------------------
// Práctica 1.2 — Variables, tipos de datos y operadores
// -------------------------------------------------------------
{
  const cultivoInicial = "Tomate";
  let diasIniciales = 15;
  const aguaSemanalInicial = 4.5;
  const necesitaSolInicial = true;

  console.log(cultivoInicial);
  console.log(typeof cultivoInicial);       // string
  console.log(typeof diasIniciales);        // number
  console.log(typeof necesitaSolInicial);   // boolean

  diasIniciales = diasIniciales + 7;
  console.log(diasIniciales);               // 22
  console.log(aguaSemanalInicial * 3);      // 13.5

  // Conversión de datos
  const cantidadTexto = "12";
  const cantidadNumero = Number(cantidadTexto);
  console.log(cantidadTexto + 3);           // "123"
  console.log(cantidadNumero + 3);          // 15
  console.log(Number("doce"));              // NaN
  console.log(Number.isNaN(Number("doce")));// true
  console.log(12 === "12");                 // false

  // undefined vs null
  let pendienteDeAsignacion;
  const datoAusente = null;
  console.log(pendienteDeAsignacion);          // undefined
  console.log(datoAusente);                    // null
  console.log(typeof pendienteDeAsignacion);   // "undefined"
  pendienteDeAsignacion = 5;
  console.log(typeof pendienteDeAsignacion);   // "number"
  pendienteDeAsignacion = "cinco";
  console.log(typeof pendienteDeAsignacion);   // "string" (tipado dinámico: el tipo
  // pertenece al valor, no a la variable)

  // Operadores
  const precioDePrueba = 2500;
  const cantidadDePrueba = 3;
  const descuentoDePrueba = 1000;
  console.log(precioDePrueba * cantidadDePrueba);                      // 7500
  console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba);  // 6500
  console.log(cantidadDePrueba >= 3);                                  // true
  console.log(cantidadDePrueba === "3");                               // false
  console.log(cantidadDePrueba !== 0);                                 // true

  // Ensayo de conversión
  console.log(Number("  "));   // 0   (solo espacios = vacío -> 0)
  console.log(Number("-3"));   // -3
  console.log(Number("2,5"));  // NaN (la coma decimal no se reconoce)

  // Actividad 1: producto
  const nombreProducto = "Abono orgánico";
  const precioUnitario = 1800;
  const unidadesDisponibles = 25;
  const disponible = true;
  console.log(typeof nombreProducto, typeof precioUnitario,
    typeof unidadesDisponibles, typeof disponible);

  // Actividad 2: valores y diferencia
  const valorDiez = precioUnitario * 10;     // 18000
  const valorSiete = precioUnitario * 7;     // 12600
  console.log(valorDiez, valorSiete, valorDiez - valorSiete); // 18000 12600 5400
  // Cambiaría `const` por `let` en unidadesDisponibles si el stock
  // se fuera reasignando (por ventas o reposiciones).

  // Actividad 3: orden de operaciones
  console.log(10 + 2 * 3);    // 16 (primero * y luego +)
  console.log((10 + 2) * 3);  // 36 (los paréntesis se evalúan primero)

  // Actividad 4: comparaciones
  console.log(10 > 8);        // true
  console.log(10 <= 8);       // false
  console.log(10 !== "10");   // true  (distinto tipo)
  console.log(5 === 5);       // true
  console.log(5 == "5");      // true  (== convierte tipos; mejor usar ===)

  // Actividad 5: costo del agua = 3.5 L x 4 semanas x 250 por litro
  console.log("Costo de agua:", 3.5 * 4 * 250); // 3500

  // Actividad 6: operadores abreviados
  let contador = 10;
  contador += 1; console.log(contador); // 11
  contador -= 2; console.log(contador); // 9
  contador *= 3; console.log(contador); // 27

  // Depuración: const diasDePrueba = 10; diasDePrueba = 11;
  // -> TypeError: Assignment to constant variable.
  // El valor debía cambiar, así que se declara con let:
  let diasDePrueba = 10;
  diasDePrueba = 11;
  console.log(diasDePrueba); // 11

  // Comprobación: sumar números, concatenar texto y comparar estrictamente
  console.log(2 + 3);        // 5
  console.log("2" + "3");    // "23"
  console.log(2 === "2");    // false
}

// -------------------------------------------------------------
// Práctica 1.3 — Condicionales y decisiones
// -------------------------------------------------------------

// Humedad con control de valores fuera de rango (0 a 100)
function clasificarHumedad(humedad) {
  if (humedad < 0 || humedad > 100) {
    return "Humedad inválida";
  } else if (humedad < 30) {
    return "Humedad baja";
  } else if (humedad <= 60) {
    return "Humedad adecuada";
  } else {
    return "Humedad alta";
  }
}

function clasificarExistencias(cantidad) {
  if (cantidad === 0) return "Sin existencias";
  if (cantidad >= 1 && cantidad <= 5) return "Existencias bajas";
  if (cantidad > 5) return "Disponible";
  return "Cantidad inválida";
}

function clasificarCalificacion(nota) {
  if (nota < 0 || nota > 100) return "Calificación inválida";
  if (nota <= 59) return "Por mejorar";
  if (nota <= 79) return "Aceptable";
  return "Destacado";
}

{
  for (const h of [29, 30, 60, 61, -1, 101, 0, 100]) {
    console.log("Humedad", h, "->", clasificarHumedad(h));
  }

  // Condiciones combinadas
  const temperaturaEjemplo = 24;
  const tieneAguaEjemplo = true;
  if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
    console.log("Se cumplen las condiciones de la simulación");
  } else {
    console.log("Revisar condiciones");
  }

  // Operadores lógicos
  const litrosDisponibles = 1;
  const temperaturaActual = 34;
  const revisarPorAgua = litrosDisponibles < 2;     // true
  const revisarPorCalor = temperaturaActual > 30;   // true
  console.log(revisarPorAgua && revisarPorCalor);   // true
  console.log(revisarPorAgua || revisarPorCalor);   // true
  console.log(!revisarPorAgua);                     // false

  // Aplica: "Revisar cultivo" si se cumple cualquiera de las dos alertas
  const mensajeAlerta = (agua, calor) => (agua || calor ? "Revisar cultivo" : "Sin alertas");
  console.log(mensajeAlerta(true, true));    // Revisar cultivo
  console.log(mensajeAlerta(true, false));   // Revisar cultivo
  console.log(mensajeAlerta(false, true));   // Revisar cultivo
  console.log(mensajeAlerta(false, false));  // Sin alertas

  // Actividad 1: existencias
  for (const c of [0, 1, 5, 6]) console.log("Existencias", c, "->", clasificarExistencias(c));

  // Actividad 2: calificaciones
  for (const n of [-1, 0, 59, 60, 79, 80, 100, 101]) {
    console.log("Nota", n, "->", clasificarCalificacion(n));
  }

  // Actividad 3: aviso solo si estado === "crecimiento" Y agua < 2
  const debeAvisar = (estado, agua) => estado === "crecimiento" && agua < 2;
  console.log(debeAvisar("crecimiento", 1.5)); // true
  console.log(debeAvisar("crecimiento", 3));   // false
  console.log(debeAvisar("semilla", 1));       // false

  // Actividad 4: variable booleana intermedia (más legible)
  const estadoCultivo = "crecimiento";
  const aguaCultivo = 1.5;
  const enCrecimiento = estadoCultivo === "crecimiento";
  const aguaBaja = aguaCultivo < 2;
  if (enCrecimiento && aguaBaja) console.log("Avisar: riego necesario");

  // Depuración: if (estadoPrueba = "cosecha") ASIGNA, no compara.
  // La asignación devuelve "cosecha" (truthy), por eso siempre entra al if
  // y además deja el estado modificado.
  let estadoPrueba = "semilla";
  if (estadoPrueba === "cosecha") {   // corregido: comparación estricta
    console.log("Listo para cosechar");
  } else {
    console.log("Aún no está listo, estado:", estadoPrueba);
  }
}

// -------------------------------------------------------------
// Práctica 1.4 — Arreglos y repeticiones
// -------------------------------------------------------------
{
  const litrosRegistrados = [2, 3.5, 4, 1.5];
  let totalLitros = 0;
  for (let indice = 0; indice < litrosRegistrados.length; indice++) {
    totalLitros += litrosRegistrados[indice];
  }
  console.log(totalLitros);                 // 11
  console.log(litrosRegistrados[0]);        // 2
  console.log(litrosRegistrados.length);    // 4

  const herramientas = ["Pala", "Regadera", "Guantes"];
  herramientas.push("Rastrillo");
  console.log(herramientas.includes("Regadera")); // true
  console.log(herramientas[1]);                   // Regadera
  herramientas.splice(0, 1);
  console.log(herramientas);                      // ["Regadera","Guantes","Rastrillo"]
  console.log(herramientas[10]);                  // undefined: esa posición no existe

  for (const herramienta of herramientas) {
    console.log("Herramienta: " + herramienta);
  }

  let intentosEjemplo = 0;
  while (intentosEjemplo < 3) {
    console.log("Intento " + (intentosEjemplo + 1));
    intentosEjemplo++;
  }

  // Ciclo paso a paso: con 1 elemento -> 1 línea; con [] -> 0 líneas
  const diasObservados = [5, 10, 15];
  for (let posicion = 0; posicion < diasObservados.length; posicion++) {
    console.log("Índice:", posicion, "Valor:", diasObservados[posicion]);
  }

  // Promedio protegido contra arreglo vacío
  const promedio = (lista) => {
    if (lista.length === 0) return null; // no hay promedio que inventar
    let suma = 0;
    for (const valor of lista) suma += valor;
    return suma / lista.length;
  };
  console.log(promedio([]));        // null -> "No hay mediciones para promediar"
  console.log(promedio([2, 4, 6])); // 4
  // Dividir 0/0 daría NaN: por eso se comprueba length antes de dividir.

  // Actividad 1: primero y último con length
  const nombres = ["Tomate", "Lechuga", "Maíz", "Zanahoria", "Rábano"];
  console.log(nombres[0], nombres[nombres.length - 1]);

  // Actividad 2: agregar, eliminar, comprobar longitud
  nombres.push("Cilantro");
  nombres.splice(1, 1); // elimina "Lechuga"
  console.log(nombres, nombres.length); // 5

  // Actividad 3: suma y promedio de [12, 8, 15, 5, 10]
  const datos = [12, 8, 15, 5, 10];
  let suma = 0;
  for (const d of datos) suma += d;
  console.log("Suma:", suma, "Promedio:", suma / datos.length); // 50 y 10

  // Actividad 4: contar existencias agotadas (valores === 0)
  let agotadas = 0;
  for (const existencia of [2, 0, 3, 0, 1]) {
    if (existencia === 0) agotadas++;
  }
  console.log("Agotadas:", agotadas); // 2

  // Actividad 5: posiciones desde 1
  const lista = ["Tomate", "Lechuga", "Maíz"];
  for (let i = 0; i < lista.length; i++) {
    console.log((i + 1) + ". " + lista[i]);
  }

  // Depuración: i <= length intenta leer nombresPrueba[3] (undefined) y
  // undefined.toUpperCase() lanza TypeError. Corregido con <:
  const nombresPrueba = ["Tomate", "Papa", "Maíz"];
  for (let i = 0; i < nombresPrueba.length; i++) {
    console.log(nombresPrueba[i].toUpperCase());
  }
}

// -------------------------------------------------------------
// Práctica 1.5 — Objetos y funciones
// -------------------------------------------------------------
function calcularAgua(aguaPorSemana, semanas) {
  return aguaPorSemana * semanas;
}

function describirCultivo(cultivo) {
  return cultivo.nombre + " lleva " + cultivo.dias + " días registrado";
}

function esCantidadValida(cantidad) {
  return typeof cantidad === "number" && Number.isFinite(cantidad) && cantidad >= 0;
}

function contarPorEstado(lista, estadoBuscado) {
  let total = 0;
  for (const cultivo of lista) {
    if (cultivo.estado === estadoBuscado) total++;
  }
  return total;
}

function promedioAgua(lista) {
  if (lista.length === 0) return 0; // decisión: sin cultivos, promedio 0
  let suma = 0;
  for (const cultivo of lista) suma += cultivo.agua;
  return suma / lista.length;
}

function valorInventario(productos) {
  let total = 0;
  for (const p of productos) total += p.precio * p.existencias;
  return total;
}

{
  const cultivoEjemplo = { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" };
  console.log(cultivoEjemplo.nombre);      // Tomate
  console.log(cultivoEjemplo["agua"]);     // 7
  cultivoEjemplo.agua = 7.5;
  console.log(cultivoEjemplo.agua);        // 7.5

  const cultivosDeEjemplo = [
    { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
    { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
    { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
  ];
  for (const c of cultivosDeEjemplo) console.log(c.nombre + ": " + c.estado);

  console.log(calcularAgua(7, 4));   // 28
  console.log(calcularAgua(3, 2));   // 6
  console.log(describirCultivo(cultivosDeEjemplo[1])); // Lechuga lleva 25 días registrado

  // Parámetros vs argumentos; devolver vs mostrar
  function saludarCultivo() { console.log("Bienvenido al registro"); }
  function mostrarNombreCultivo(nombre) { console.log("Cultivo: " + nombre); }
  function calcularConsumo(aguaSemanal, numeroSemanas) { return aguaSemanal * numeroSemanas; }
  saludarCultivo();
  mostrarNombreCultivo("Cilantro");
  console.log("Consumo:", calcularConsumo(2.5, 4)); // 10

  // Alcance
  const tipoDeUnidad = "litros";
  function describirRiego(cantidad) {
    const mensajeLocal = cantidad + " " + tipoDeUnidad;
    return mensajeLocal;
  }
  console.log(describirRiego(3)); // "3 litros"
  // console.log(mensajeLocal);   // ReferenceError: solo existe dentro de la función

  // Separar cálculo y presentación
  const costoTotalProducto = (precio, unidades) => precio * unidades;
  console.log("Total a pagar: " + costoTotalProducto(1800, 3)); // 5400
  console.log(costoTotalProducto(1800, 0), costoTotalProducto(1800, 1), costoTotalProducto(1800, 5));

  // Función flecha
  const duplicarEjemplo = (numero) => numero * 2;
  console.log(duplicarEjemplo(6)); // 12

  // Actividad 1: nueva propiedad y cambio de estado
  cultivoEjemplo.responsable = "Equipo A";
  cultivoEjemplo.estado = "semilla";
  console.log(describirCultivo(cultivoEjemplo), "| responsable:", cultivoEjemplo.responsable);

  // Actividad 2: esCantidadValida
  for (const v of [0, 2.5, -1, NaN, Infinity]) console.log(v, "->", esCantidadValida(v));
  // 0 true | 2.5 true | -1 false | NaN false | Infinity false
  // Number.isFinite(x) es true solo si x es un número (no NaN ni ±Infinity).

  // Actividad 3
  console.log(contarPorEstado(cultivosDeEjemplo, "cosecha"));     // 1
  console.log(contarPorEstado(cultivosDeEjemplo, "crecimiento")); // 1

  // Actividad 4
  console.log(promedioAgua(cultivosDeEjemplo)); // 4
  console.log(promedioAgua([]));                // 0 (decisión documentada arriba)

  // Actividad 5: tienda
  const tienda = [
    { nombre: "Semillas", precio: 1500, existencias: 10 },
    { nombre: "Guantes", precio: 8000, existencias: 4 },
    { nombre: "Regadera", precio: 12000, existencias: 2 }
  ];
  console.log("Valor del inventario:", valorInventario(tienda)); // 71000

  // Actividad 6: cada objeto es independiente
  cultivosDeEjemplo[0].estado = "semilla";
  console.log(cultivosDeEjemplo.map((c) => c.estado)); // ["semilla","crecimiento","semilla"]
  // El estado de los otros dos registros no cambió.

  // Depuración: faltaba `return resultado;`
  function obtenerTotal(precio, cantidad) {
    const resultado = precio * cantidad;
    return resultado; // corregido
  }
  console.log(obtenerTotal(2000, 3)); // 6000
}
