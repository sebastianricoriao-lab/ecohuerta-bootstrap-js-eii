# Laboratorio 1 — Fundamentos de JavaScript con EcoHuerta

JavaScript permite que una página web responda a las acciones de las personas y trabaje con información. En este laboratorio partirás de EcoHuerta, una página preparada con HTML y Bootstrap, y aprenderás a convertir datos en decisiones, cálculos e interacciones.

**Objetivo:** comprender y aplicar los fundamentos de JavaScript mediante ejercicios en la consola y la construcción progresiva de un gestor de cultivos.

> **Solución de referencia:** esta copia del repositorio incluye una
> implementación funcional en `js/main.js` y `js/fundamentos.js`. Puedes probarla
> primero y después recorrer las actividades para comprender y reconstruir cada
> parte. La ampliación de persistencia con `localStorage` también está
> implementada.

## Antes de comenzar

Necesitas nociones básicas de HTML (etiquetas, atributos e identificadores), Visual Studio Code y un navegador moderno. No necesitas Node.js, npm, bases de datos ni extensiones obligatorias.

1. Abre la carpeta del repositorio en Visual Studio Code.
2. Identifica `fundamentos.html`, `index.html`, `js/fundamentos.js` y `js/main.js`.
3. Abre `fundamentos.html` en el navegador. Presiona **F12** (o **Ctrl + Mayús + I**) y selecciona **Consola**.
4. Comprueba que aparece el mensaje **EcoHuerta: JavaScript conectado correctamente.**
5. Abre `index.html`. Prueba las tarjetas, la búsqueda, los indicadores, el
   formulario y la persistencia. Después estudia las prácticas para reconocer
   cómo se construye cada comportamiento.

Trabajarás en **`js/fundamentos.js` durante las prácticas 1.1 a 1.5** y en **`js/main.js` durante las prácticas 1.6 a 1.8 y la actividad integradora**. Guarda los cambios y recarga el HTML correspondiente. Los archivos HTML cargan JavaScript con `defer`; por eso el código se ejecuta después de que el navegador analiza el documento.

**Cómo utilizar los ejemplos:** copia solamente los fragmentos de la práctica que estés realizando. Cuando se indique «agrega», coloca el código debajo del existente. Puedes separar prácticas con comentarios como `// Práctica 1.2`. Si vuelves a declarar una constante con el mismo nombre en el mismo archivo, JavaScript mostrará un error: cambia el nombre, comenta la versión anterior o encierra el ejercicio nuevo entre llaves `{ ... }`. No copies los ejemplos que estén identificados como **error intencional** dentro de un programa que debe funcionar.

Antes de ejecutar cada fragmento, escribe tu predicción en un comentario de tu archivo o en una nota breve. Después comprueba la salida real. Si es diferente, explica por qué.

---

## Práctica 1.1 — Primera ejecución y consola

### 1. ¿Qué hace JavaScript?

HTML define el contenido; Bootstrap proporciona estilos y componentes visuales; JavaScript ejecuta instrucciones. El navegador interpreta el archivo enlazado y permite mostrar información mediante la consola, modificar elementos de la página y responder a eventos.

Abre `js/fundamentos.js`. Debajo del mensaje existente, agrega:

```js
console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");
```

Guarda, recarga `fundamentos.html` y observa la pestaña **Consola**. `console.log()` muestra valores para inspeccionarlos; `console.warn()` destaca advertencias. No son mensajes visibles dentro de la página.

**Predice antes de recargar:** ¿las dos expresiones que contienen 8 y 5 generan el mismo resultado? ¿Por qué?

**Comprueba:** la operación numérica produce `13` y la concatenación con una cadena produce `85`. Las comillas cambian el tipo de dato de `"8"`.

### Cómo se ejecuta el código

Cuando abres `fundamentos.html`, el navegador lee el HTML y encuentra una referencia a `js/fundamentos.js`. Ejecuta sus instrucciones y muestra en la Consola los valores enviados mediante `console.log()`. La Consola es una herramienta del navegador; **no es la terminal de VS Code**.

La secuencia de trabajo es: **editar JavaScript → guardar → recargar la página → observar la Consola**. Si modificas el archivo y no recargas, seguirás observando la ejecución anterior.

En `fundamentos.html` encontrarás una etiqueta como esta:

```html
<script src="js/fundamentos.js" defer></script>
```

`src` indica el archivo que se cargará. `defer` permite que el navegador termine de analizar el documento antes de ejecutar ese script externo. Abre las herramientas del navegador en **Consola**, no en **Elementos**. Si no aparece el mensaje inicial, comprueba que el archivo se guardó, que abriste el HTML correcto y que la ruta coincide con la carpeta `js`.

**Prueba controlada:** modifica el mensaje de bienvenida, guarda y recarga. Después cambia temporalmente `src` a un nombre de archivo inexistente, observa en Consola o Red/Network el fallo de carga y restaura la ruta correcta.

### Actividades

1. Muestra tu nombre y, en una instrucción diferente, el nombre de un cultivo.
2. Calcula en la consola cuántas plantas hay en cuatro filas de siete plantas. No escribas el resultado directamente: utiliza una multiplicación.
3. Calcula cuántos litros hacen falta para regar ocho plantas que necesitan dos litros cada una.
4. Prueba `console.log(20 / 4)`, `console.log(20 % 6)` y `console.log(2 ** 3)`. Explica qué operación realiza cada símbolo.
5. Escribe en un comentario cuál es la diferencia entre un error que aparece en la Consola y una advertencia que tú envías con `console.warn()`.

### Depuración: error intencional

Ejecuta este fragmento **por separado**, después de comentar temporalmente el código que funciona:

```js
console.log("Cultivo registrado);
```

Observa el mensaje de sintaxis y la línea señalada. Corrige el problema sin cambiar el texto que se desea mostrar, guarda y recarga. Después vuelve a dejar activo tu código correcto.

**Comprobación:** la Consola debe mostrar tus mensajes y operaciones sin errores no intencionales.

---

## Práctica 1.2 — Variables, tipos de datos y operadores

Una variable conserva un valor para utilizarlo después. Usa `const` cuando no necesites reasignar una variable y `let` cuando su valor vaya a cambiar. Evita `var` en los ejemplos nuevos. Recuerda que JavaScript distingue mayúsculas de minúsculas.

Agrega en `js/fundamentos.js`:

```js
const cultivoInicial = "Tomate";
let diasIniciales = 15;
const aguaSemanalInicial = 4.5;
const necesitaSolInicial = true;

console.log(cultivoInicial);
console.log(typeof cultivoInicial);
console.log(typeof diasIniciales);
console.log(typeof necesitaSolInicial);

diasIniciales = diasIniciales + 7;
console.log(diasIniciales);
console.log(aguaSemanalInicial * 3);
```

Las cadenas son textos (tipo `string`), `15` y `4.5` son números (tipo `number`) y `true` es un booleano (tipo `boolean`). `typeof` permite inspeccionar el tipo. El operador `=` asigna; `===` compara valor y tipo.

**Predice:** ¿cuánto vale `diasIniciales` al terminar? ¿Cuántos litros representan tres semanas? Confirma: `22` días y `13.5` litros.

### Conversión de datos

Los valores escritos en campos HTML llegan inicialmente como texto. Prueba en la consola:

```js
const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);

console.log(cantidadTexto + 3);
console.log(cantidadNumero + 3);
console.log(Number("doce"));
console.log(Number.isNaN(Number("doce")));
console.log(12 === "12");
```

**Comprueba:** `"123"`, `15`, `NaN`, `true` y `false`, respectivamente. `NaN` significa que la operación no obtuvo un número válido. También debes recordar que `Number("")` produce `0`: antes de convertir un formulario tendrás que verificar que el campo no esté vacío.

### Distinguir declaración, asignación y tipo

Estas tres operaciones no significan lo mismo:

```js
const nombreDePrueba = "Rábano";  // Declara y asigna una cadena
let unidadesDePrueba = 8;        // Declara un número que puede cambiar
unidadesDePrueba = 12;           // Reasigna el valor anterior

console.log(nombreDePrueba);
console.log(unidadesDePrueba);
console.log(typeof unidadesDePrueba);
```

Predice: se muestran `Rábano`, `12` y `number`. Las comillas indican que `"Rábano"` es texto; el número `12` no lleva comillas. Un dato booleano representa `true` o `false`, y no debe confundirse con la cadena `"true"`.

Observa también dos valores que encontrarás al depurar:

```js
let pendienteDeAsignacion;
const datoAusente = null;

console.log(pendienteDeAsignacion); // undefined
console.log(datoAusente);          // null
console.log(typeof pendienteDeAsignacion); // "undefined"
```

`undefined` indica aquí que todavía no se ha asignado un valor; `null` se utiliza para representar expresamente la ausencia de un dato. No son lo mismo que `0` ni que `""`. Por una particularidad histórica, `typeof null` devuelve `"object"`; no debes concluir que `null` es un objeto que puedes consultar.

**Modifica:** asigna un número a `pendienteDeAsignacion` e imprime su tipo nuevamente. Intenta luego asignarle una cadena y explica por qué JavaScript permite cambiar el tipo de esa variable.

### Operadores que conviene diferenciar

```js
const precioDePrueba = 2500;
const cantidadDePrueba = 3;
const descuentoDePrueba = 1000;

console.log(precioDePrueba * cantidadDePrueba);
console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba);
console.log(cantidadDePrueba >= 3);
console.log(cantidadDePrueba === "3");
console.log(cantidadDePrueba !== 0);
```

La multiplicación se calcula antes que la resta; puedes utilizar paréntesis para hacer explícito el orden. `=` asigna un valor, `===` pregunta por la igualdad estricta y `!==` pregunta por la desigualdad estricta. No intercambies asignación y comparación dentro de un `if`.

Predice los resultados y comprueba: `7500`, `6500`, `true`, `false` y `true`.

### Conversión: comprobar antes de operar

| Expresión | Resultado | Explicación |
| --- | --- | --- |
| `"5" + 2` | `"52"` | Se concatena texto |
| `Number("5") + 2` | `7` | Primero se convierte |
| `Number("4.5")` | `4.5` | Admite decimales con punto |
| `Number("")` | `0` | No significa que se haya ingresado un dato |
| `Number("hola")` | `NaN` | No se pudo convertir a número |

En un formulario, comprueba primero que el valor no esté vacío y luego valida que la conversión sea adecuada. Esta diferencia será importante cuando construyas el registro de cultivos.

**Ensayo:** prueba `Number("  ")`, `Number("-3")` y `Number("2,5")`. Registra cuáles producen `0`, un número negativo o `NaN`, respectivamente.

### Actividades

1. Define variables para un producto con nombre, precio unitario, unidades disponibles y disponibilidad. Muestra sus tipos.
2. Calcula el valor de diez unidades, el valor de siete unidades y la diferencia entre ambos. Explica dónde cambiarías `let` por `const`.
3. Prueba `10 + 2 * 3` y `(10 + 2) * 3`. Explica el orden de las operaciones.
4. Predice y ejecuta `10 > 8`, `10 <= 8`, `10 !== "10"`, `5 === 5` y `5 == "5"`. Para código nuevo prefiere `===` y `!==` a la comparación con conversión implícita.
5. Calcula el costo de agua de un cultivo si usa 3.5 litros por semana durante cuatro semanas y cada litro cuesta 250 unidades monetarias. Resultado esperado: **3500**.
6. Prueba los operadores abreviados: `contador += 1`, `contador -= 2` y `contador *= 3`. Crea primero la variable `contador` con `let`.

### Depuración: error intencional

```js
const diasDePrueba = 10;
diasDePrueba = 11;
console.log(diasDePrueba);
```

¿Por qué falla la reasignación? Decide si el valor debía permanecer fijo o cambiar y aplica la declaración apropiada.

**Comprobación:** demuestra con tres salidas la diferencia entre sumar números, concatenar texto y comparar con igualdad estricta.

---

## Práctica 1.3 — Condicionales y decisiones

Una condición permite escoger qué instrucciones ejecutar. En EcoHuerta puedes decidir si un cultivo requiere revisión, si una cantidad es válida o qué mensaje corresponde a determinado estado.

### Ejemplo guiado: humedad

```js
const humedadEjemplo = 37;

if (humedadEjemplo < 30) {
  console.log("Humedad baja");
} else if (humedadEjemplo <= 60) {
  console.log("Humedad adecuada");
} else {
  console.log("Humedad alta");
}
```

Predice el mensaje. Después prueba `29`, `30`, `60` y `61`. Para esta **simulación de programación** los intervalos son: menos de 30, entre 30 y 60 incluidos y más de 60. No se trata de una recomendación agronómica para una especie real.

### Condiciones combinadas

```js
const temperaturaEjemplo = 24;
const tieneAguaEjemplo = true;

if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
  console.log("Se cumplen las condiciones de la simulación");
} else {
  console.log("Revisar condiciones");
}
```

`&&` exige que todas las condiciones sean verdaderas; `||` acepta al menos una; `!` invierte un booleano. Cambia `tieneAguaEjemplo` a `false` y predice qué sucede.

### Operadores lógicos: Y, O y negación

En un cultivo pueden existir varias razones independientes para mostrar una alerta. Compara los siguientes resultados:

```js
const litrosDisponibles = 1;
const temperaturaActual = 34;
const revisarPorAgua = litrosDisponibles < 2;
const revisarPorCalor = temperaturaActual > 30;

console.log(revisarPorAgua && revisarPorCalor); // Ambas condiciones
console.log(revisarPorAgua || revisarPorCalor); // Al menos una condición
console.log(!revisarPorAgua);                   // Invierte el booleano
```

Antes de ejecutarlo, identifica el valor booleano de cada variable. Para estos valores, las salidas son `true`, `true` y `false`. Luego modifica únicamente `litrosDisponibles` a `4` y vuelve a predecir.

| A | B | `A && B` | `A \|\| B` |
| --- | --- | --- | --- |
| `true` | `true` | `true` | `true` |
| `true` | `false` | `false` | `true` |
| `false` | `true` | `false` | `true` |
| `false` | `false` | `false` | `false` |

**Aplica:** construye una condición que muestre «Revisar cultivo» si se cumple *cualquiera* de las dos alertas, y «Sin alertas» en caso contrario. Después cambia los valores para comprobar las cuatro combinaciones de la tabla. Estos límites son reglas de simulación para practicar programación.

### Una decisión con varias ramas

En la cadena `if / else if / else`, JavaScript ejecuta la **primera rama cuya condición sea verdadera**. Por eso el orden de los límites importa. En el ejemplo de humedad, cuando el valor es `30`, no entra en la primera condición y sí entra en la segunda; cuando vale `61`, entra en `else`.

Comprueba también los casos extremos `-1` y `101`. Tal como está escrito, el ejemplo de humedad **los clasifica** aunque esos valores no tengan sentido como porcentaje. Modifícalo para mostrar `"Humedad inválida"` si el dato no está entre 0 y 100. Prueba `0`, `30`, `60`, `100` y ambos valores inválidos.

### Actividades

1. Para un inventario, muestra «Sin existencias» si la cantidad es 0; «Existencias bajas» entre 1 y 5; «Disponible» por encima de 5. Prueba `0`, `1`, `5` y `6`.
2. Clasifica una calificación entre 0 y 100 con estas reglas de práctica: 0–59 «Por mejorar», 60–79 «Aceptable» y 80–100 «Destacado». Los valores fuera del intervalo deben producir «Calificación inválida». Prueba `-1`, `0`, `59`, `60`, `79`, `80`, `100` y `101`.
3. Diseña una regla para enviar un aviso solo cuando un cultivo esté en estado `"crecimiento"` **y** el agua disponible sea menor que 2 litros.
4. Elige una de las actividades y escribe una versión equivalente con una variable booleana intermedia; explica si facilita la lectura.

### Depuración: error lógico intencional

```js
let estadoPrueba = "semilla";

if (estadoPrueba = "cosecha") {
  console.log("Listo para cosechar");
}
```

Este fragmento puede ejecutar una rama equivocada **sin generar un error de sintaxis**. Inspecciona el valor de `estadoPrueba` antes y después de la condición, identifica el operador responsable y corrígelo.

**Comprobación:** todos los límites de la clasificación deben corresponder a un único resultado, sin intervalos solapados ni valores válidos sin clasificar.

---

## Práctica 1.4 — Arreglos y repeticiones

Un **arreglo** almacena varios valores en orden. Las posiciones comienzan en `0`. Los ciclos permiten trabajar con cada elemento sin escribir una instrucción por cada valor.

### Ejemplo guiado: consumir datos de un arreglo

```js
const litrosRegistrados = [2, 3.5, 4, 1.5];
let totalLitros = 0;

for (let indice = 0; indice < litrosRegistrados.length; indice++) {
  totalLitros += litrosRegistrados[indice];
}

console.log(totalLitros);
console.log(litrosRegistrados[0]);
console.log(litrosRegistrados.length);
```

Predice las tres salidas antes de ejecutar. Comprueba: `11`, `2` y `4`.

Un `for` tiene inicio, condición de continuación y actualización del contador. El ciclo recorre índices desde `0` hasta `length - 1`.

### Agregar, consultar y eliminar elementos

```js
const herramientas = ["Pala", "Regadera", "Guantes"];
herramientas.push("Rastrillo");
console.log(herramientas.includes("Regadera"));
console.log(herramientas[1]);
herramientas.splice(0, 1);
console.log(herramientas);
```

`push()` agrega al final; `includes()` comprueba si hay coincidencia; `splice(0, 1)` elimina un elemento desde la posición cero. Prueba también `herramientas[10]` y explica por qué no devuelve una herramienta.

Puedes recorrer valores directamente:

```js
for (const herramienta of herramientas) {
  console.log("Herramienta: " + herramienta);
}
```

Cuando no conoces por adelantado la cantidad de repeticiones, `while` puede resultar útil; asegúrate de modificar su condición:

```js
let intentosEjemplo = 0;
while (intentosEjemplo < 3) {
  console.log("Intento " + (intentosEjemplo + 1));
  intentosEjemplo++;
}
```

### Observar un ciclo paso a paso

Antes de introducir nuevos métodos, analiza esta versión reducida:

```js
const diasObservados = [5, 10, 15];

for (let posicion = 0; posicion < diasObservados.length; posicion++) {
  console.log("Índice:", posicion, "Valor:", diasObservados[posicion]);
}
```

| Iteración | `posicion` | Condición `posicion < 3` | Valor leído |
| --- | --- | --- | --- |
| Primera | 0 | Verdadera | 5 |
| Segunda | 1 | Verdadera | 10 |
| Tercera | 2 | Verdadera | 15 |
| Siguiente comprobación | 3 | Falsa | No se ejecuta el cuerpo |

El índice cambia **después** de cada vuelta. El ciclo finaliza cuando la condición es falsa. Si utilizaras `<=` en vez de `<`, intentarías acceder a una posición fuera del arreglo, como ocurre en el ejercicio de depuración.

**Predice:** ¿cuántas líneas se mostrarán si el arreglo contiene un único valor? ¿Y si está vacío? Ejecuta ambas variantes.

### Recorrer índices o valores

Usa `for` con índice cuando necesitas conocer o modificar una posición del arreglo. Utiliza `for...of` cuando necesitas trabajar directamente con cada valor:

```js
const cantidadesDePrueba = [4, 7, 2];

for (let i = 0; i < cantidadesDePrueba.length; i++) {
  console.log("Posición " + i + ": " + cantidadesDePrueba[i]);
}

for (const cantidad of cantidadesDePrueba) {
  console.log("Cantidad: " + cantidad);
}
```

Los dos ciclos recorren tres elementos, pero el primero permite mostrar la posición. `for...of` no entrega un índice automáticamente.

### Evitar un cálculo inválido

Para obtener un promedio, necesitas una suma y una cantidad de elementos. Si no hay valores, debes decidir qué hacer **antes de dividir**:

```js
const medicionesDePrueba = [];
let sumaMediciones = 0;

for (const medicion of medicionesDePrueba) {
  sumaMediciones += medicion;
}

if (medicionesDePrueba.length === 0) {
  console.log("No hay mediciones para promediar");
} else {
  console.log(sumaMediciones / medicionesDePrueba.length);
}
```

Prueba luego con `[2, 4, 6]` y comprueba que muestra `4`. El arreglo vacío no debe generar un promedio numérico inventado ni una división por cero.

### Actividades

1. Crea un arreglo de cinco nombres de cultivos. Muestra el primero y el último **usando `length`**.
2. Agrega un cultivo al final, elimina uno y comprueba la nueva longitud.
3. Dado el arreglo `[12, 8, 15, 5, 10]`, calcula la suma y el promedio mediante un ciclo. Comprueba: suma **50**, promedio **10**.
4. Cuenta cuántos valores de `[2, 0, 3, 0, 1]` representan existencias agotadas. Resultado esperado: **2**.
5. Recorre el arreglo `["Tomate", "Lechuga", "Maíz"]` e imprime cada nombre precedido de su número de posición comenzando en 1.
6. Modifica un ejercicio para trabajar con un arreglo vacío. ¿Qué sucede si intentas calcular el promedio dividiendo entre `0`? Define qué debería mostrar tu solución en ese caso.

### Depuración: error intencional

```js
const nombresPrueba = ["Tomate", "Papa", "Maíz"];
for (let i = 0; i <= nombresPrueba.length; i++) {
  console.log(nombresPrueba[i].toUpperCase());
}
```

Ejecuta y lee el error. Imprime `i` en cada vuelta para identificar la posición que ya no existe. Corrige el límite del ciclo y verifica que se muestren exactamente tres nombres.

**Comprobación:** las sumas deben funcionar con uno, varios y cero elementos; la solución del promedio debe indicar claramente qué ocurre cuando no hay valores.

---

## Práctica 1.5 — Objetos y funciones

Cuando cada registro tiene varias características, resulta más claro representarlo mediante un **objeto**. Una función agrupa instrucciones que pueden reutilizarse con diferentes argumentos.

### Objetos

```js
const cultivoEjemplo = {
  nombre: "Tomate",
  dias: 85,
  agua: 7,
  estado: "cosecha"
};

console.log(cultivoEjemplo.nombre);
console.log(cultivoEjemplo["agua"]);

cultivoEjemplo.agua = 7.5;
console.log(cultivoEjemplo.agua);
```

Predice las salidas: `"Tomate"`, `7` y `7.5`. Aunque el objeto esté declarado con `const`, sus **propiedades** pueden modificarse; lo que no puedes hacer es asignarle un objeto distinto a esa misma variable.

Combina arreglos y objetos:

```js
const cultivosDeEjemplo = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

for (const cultivo of cultivosDeEjemplo) {
  console.log(cultivo.nombre + ": " + cultivo.estado);
}
```

### Funciones con parámetros y retorno

```js
function calcularAgua(aguaPorSemana, semanas) {
  return aguaPorSemana * semanas;
}

const consumoTomate = calcularAgua(7, 4);
console.log(consumoTomate);
console.log(calcularAgua(3, 2));
```

Una función recibe parámetros; `return` entrega su resultado a quien la llamó. Aquí las salidas son **28** y **6**. Un `console.log()` dentro de una función no sustituye a `return` cuando necesitas reutilizar el cálculo.

### Función para describir un cultivo

```js
function describirCultivo(cultivo) {
  return cultivo.nombre + " lleva " + cultivo.dias + " días registrado";
}

console.log(describirCultivo(cultivosDeEjemplo[1]));
```

Predice el resultado. Cambia el argumento para consultar otro objeto.

### Parámetros, argumentos y resultado: tres pasos

Compara estas funciones. Ejecútalas por separado, observando qué cambia en cada una:

```js
function saludarCultivo() {
  console.log("Bienvenido al registro");
}

function mostrarNombreCultivo(nombre) {
  console.log("Cultivo: " + nombre);
}

function calcularConsumo(aguaSemanal, numeroSemanas) {
  return aguaSemanal * numeroSemanas;
}

saludarCultivo();
mostrarNombreCultivo("Cilantro");
const consumoCalculado = calcularConsumo(2.5, 4);
console.log("Consumo:", consumoCalculado);
```

La primera no recibe datos. La segunda recibe un **parámetro**, `nombre`; `"Cilantro"` es el **argumento** que le pasas al llamarla. La tercera recibe dos parámetros y entrega un resultado con `return`, para que el cálculo pueda guardarse o utilizarse en otra expresión.

**Predice:** ¿qué imprime `calcularConsumo(2.5, 4)` si solo escribes la llamada, sin `console.log()`? La función devuelve `10`, pero no imprime nada por sí misma. Comprueba la diferencia entre *devolver* y *mostrar*.

### Variables locales y alcance

```js
const tipoDeUnidad = "litros";

function describirRiego(cantidad) {
  const mensajeLocal = cantidad + " " + tipoDeUnidad;
  return mensajeLocal;
}

console.log(describirRiego(3));
// La línea siguiente produciría un error si la activas:
// console.log(mensajeLocal);
```

`cantidad` y `mensajeLocal` se utilizan dentro de la función; no puedes acceder a `mensajeLocal` desde afuera. La constante `tipoDeUnidad` fue declarada fuera y la función puede leerla. Esto se llama **alcance de las variables**. Prefiere pasar los datos necesarios mediante parámetros en lugar de depender de muchas variables externas.

**Experimenta:** activa la línea comentada, lee `ReferenceError` y vuelve a comentarla. Después cambia `tipoDeUnidad` por `"mililitros"` y observa cómo afecta la función.

### Separar cálculo y presentación

```js
function costoTotalProducto(precio, unidades) {
  return precio * unidades;
}

const totalProducto = costoTotalProducto(1800, 3);
console.log("Total a pagar: " + totalProducto);
```

La función se ocupa del cálculo; `console.log()` se ocupa de mostrarlo. Esta separación permitirá utilizar una función para calcular indicadores de EcoHuerta y otra para escribir esos resultados en la página.

**Modifica:** comprueba `costoTotalProducto(1800, 0)`, `costoTotalProducto(1800, 1)` y `costoTotalProducto(1800, 5)`. Si el precio o las unidades llegan como texto de un formulario, recuerda validarlos antes de realizar el cálculo.

### Actividades

1. Añade al objeto `cultivoEjemplo` la propiedad `responsable`; cambia su estado e imprime una descripción actualizada.
2. Crea una función `esCantidadValida(cantidad)` que devuelva `true` solo para números finitos no negativos. Prueba con `0`, `2.5`, `-1`, `NaN` y `Infinity`. Investiga qué comprueba `Number.isFinite()`.
3. Crea una función `contarPorEstado(lista, estadoBuscado)` que recorra una lista de cultivos y **devuelva** cuántos tienen ese estado. Prueba el arreglo anterior: `"cosecha"` debe devolver **1** y `"crecimiento"` debe devolver **1**.
4. Crea una función que calcule el promedio de agua semanal de una lista de cultivos. Define un resultado adecuado si la lista está vacía. Con los tres cultivos de ejemplo, el promedio es **4**.
5. Diseña un arreglo de objetos para una situación distinta: tres productos de una tienda, con nombre, precio y existencias. Escribe una función que calcule el valor del inventario.
6. Comprueba que cambiar el estado del primer cultivo no cambia el estado de los otros registros.

### Para observar una función breve

```js
const duplicarEjemplo = (numero) => numero * 2;
console.log(duplicarEjemplo(6));
```

Este es un ejemplo de **función flecha**. Su resultado es `12`. Encontrarás esta sintaxis en los manejadores de eventos, pero puedes utilizar funciones tradicionales cuando te resulten más claras.

### Depuración: error intencional

```js
function obtenerTotal(precio, cantidad) {
  const resultado = precio * cantidad;
}

console.log(obtenerTotal(2000, 3));
```

La operación se realiza, pero la llamada muestra `undefined`. Identifica qué instrucción falta para que el resultado pueda utilizarse fuera de la función.

**Comprobación:** modifica los objetos de entrada de tus funciones y verifica que el cálculo cambia sin tener que editar el interior de cada función.

---

## Práctica 1.6 — El DOM y los eventos

Ahora trabajarás con `index.html` y `js/main.js`. El **DOM** representa el documento HTML como elementos que JavaScript puede consultar y modificar. Un **evento** informa de una acción como escribir en un campo, hacer clic o enviar un formulario.

En `js/main.js` ya encontrarás un ejemplo que obtiene el elemento con identificador `anio` y cambia su texto por el año actual.

### Consultar y modificar un elemento

Debajo del código existente en `js/main.js` agrega:

```js
const tituloCultivos = document.getElementById("cultivosTitulo");
console.log(tituloCultivos.textContent);
tituloCultivos.textContent = "Catálogo de EcoHuerta";
```

Guarda y recarga `index.html`. Busca en el HTML el elemento con `id="cultivosTitulo"`. El selector devuelve ese elemento o `null` si no existe. `textContent` cambia su texto sin interpretar etiquetas HTML.

**Predice:** ¿qué sucede si cambias el identificador en JavaScript por uno inexistente y accedes a `textContent`? Prueba en un fragmento separado, lee el error y restaura el identificador correcto.

### Relacionar HTML y JavaScript

Observa cómo un identificador conecta ambos archivos. En `index.html` ya existe un título:

```html
<h2 id="cultivosTitulo" class="h3 mb-1">Mis cultivos</h2>
```

En JavaScript, la búsqueda `document.getElementById("cultivosTitulo")` recupera **ese elemento**. El valor de `id` debe coincidir exactamente: `cultivostitulo` y `cultivosTitulo` no son iguales.

Puedes inspeccionar diferentes elementos sin modificarlos:

```js
console.log(document.getElementById("totalCultivos").textContent);
console.log(document.querySelector("#cultivosTitulo").textContent);
console.log(document.querySelector(".crop-card")?.textContent);
```

`getElementById()` busca un identificador. `querySelector()` acepta un selector CSS: `#` para un identificador y `.` para una clase. El operador `?.` evita intentar leer `textContent` si el selector no devuelve ningún elemento; el resultado sería `undefined`. No uses ese operador para ocultar un error cuando sabes que el elemento **debe** existir.

**Predice:** ¿cuál de estas búsquedas podría devolver `null` si quitas las tarjetas estáticas de `index.html`? Prueba sin eliminar permanentemente el contenido de la página.

### Inspeccionar clases sin cambiar datos

```js
const zonaCultivos = document.getElementById("cultivos");
console.log(zonaCultivos.classList.contains("container"));
zonaCultivos.classList.add("border-top");
zonaCultivos.classList.remove("border-top");
```

`classList` permite modificar clases de estilo y `contains()` comprueba si existe una clase. Es distinto de `textContent`, que modifica texto. En el gestor necesitarás mostrar u ocultar el aviso `sinResultados`: observa en el HTML que inicialmente tiene la clase Bootstrap `d-none`.

### Escuchar lo que escribe el usuario

```js
const campoBusqueda = document.getElementById("busqueda");

campoBusqueda.addEventListener("input", () => {
  console.log("Texto buscado: " + campoBusqueda.value);
});
```

`addEventListener()` registra una función que se ejecuta cuando ocurre el evento. `input` detecta cambios mientras el usuario escribe. El código de este ejemplo **solo muestra texto en la consola**: el filtrado de las tarjetas quedará para la actividad integradora.

### Crear elementos de forma segura

Prueba este fragmento para crear una tarjeta sencilla **adicional** a las tres que ya existen:

```js
const listaEjemplo = document.getElementById("listaCultivos");
const columnaEjemplo = document.createElement("div");
columnaEjemplo.className = "col-md-6 col-lg-4";

const tarjetaEjemplo = document.createElement("article");
tarjetaEjemplo.className = "card h-100";

const cuerpoEjemplo = document.createElement("div");
cuerpoEjemplo.className = "card-body";

const nombreEjemplo = document.createElement("h3");
nombreEjemplo.className = "h5";
nombreEjemplo.textContent = "Albahaca";

cuerpoEjemplo.append(nombreEjemplo);
tarjetaEjemplo.append(cuerpoEjemplo);
columnaEjemplo.append(tarjetaEjemplo);
listaEjemplo.append(columnaEjemplo);
```

Observa cómo `createElement()` crea elementos, `className` les asigna clases Bootstrap y `append()` los agrega al documento. No utilices `innerHTML` con textos provenientes del usuario: si necesitas mostrar esos textos, usa `textContent`.

### De un objeto JavaScript a información visible

En la práctica anterior creaste objetos con propiedades. Ahora utiliza **un único objeto** para construir una tarjeta desde sus datos, en lugar de escribir cada texto directamente en HTML.

Prueba este ejemplo **por separado**, después de comentar la tarjeta de «Albahaca» que construiste antes, para evitar tarjetas de ensayo repetidas:

```js
const cultivoVistaPrevia = {
  nombre: "Cilantro",
  dias: 12,
  agua: 1.5,
  estado: "crecimiento"
};

function crearTarjetaDeEjemplo(cultivo) {
  const columna = document.createElement("div");
  columna.className = "col-md-6 col-lg-4";

  const tarjeta = document.createElement("article");
  tarjeta.className = "card h-100";

  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";

  const titulo = document.createElement("h3");
  titulo.className = "h5";
  titulo.textContent = cultivo.nombre;

  const detalle = document.createElement("p");
  detalle.className = "text-secondary";
  detalle.textContent =
    cultivo.dias + " días · " + cultivo.agua + " litros · " + cultivo.estado;

  cuerpo.append(titulo, detalle);
  tarjeta.append(cuerpo);
  columna.append(tarjeta);
  return columna;
}

const contenedorVistaPrevia = document.getElementById("listaCultivos");
contenedorVistaPrevia.append(crearTarjetaDeEjemplo(cultivoVistaPrevia));
```

Observa cuatro pasos:

1. `cultivoVistaPrevia` conserva los datos independientemente de la interfaz.
2. `crearTarjetaDeEjemplo(cultivo)` **recibe un objeto** y utiliza sus propiedades.
3. `return` devuelve la columna HTML construida; no la agrega automáticamente al documento.
4. `append()` inserta la tarjeta en `listaCultivos`.

**Predice y modifica:** cambia `nombre`, `dias` y `estado` del objeto, recarga y observa qué texto cambia. La función no necesita modificaciones para representar otro cultivo con las mismas propiedades. Si agregas un atributo desconocido como `cultivo.color` sin definirlo, ¿qué obtienes?

Este ejemplo construye solo una vista previa; todavía **no recorre un arreglo, no elimina las tarjetas estáticas ni actualiza indicadores**. Esas decisiones son parte de la actividad integradora.

### Preparar una búsqueda sin resolver el filtro

JavaScript distingue las mayúsculas de las minúsculas al comparar cadenas:

```js
const nombreParaBuscar = "Tomate";
console.log(nombreParaBuscar.includes("tom")); // false
console.log(nombreParaBuscar.toLowerCase().includes("tom")); // true
console.log(" Lechuga ".trim().toLowerCase()); // "lechuga"
```

`toLowerCase()` convierte una cadena a minúsculas, `includes()` comprueba si contiene un texto y `trim()` elimina espacios externos. Estos métodos **devuelven** resultados: no modifican automáticamente el valor original de una variable.

En el evento `input` que ya creaste, sustituye el `console.log()` anterior por estas instrucciones **dentro del mismo listener**:

```js
const textoEscrito = campoBusqueda.value.trim().toLowerCase();
const coincideTomate = "Tomate".toLowerCase().includes(textoEscrito);
console.log("¿Coincide con Tomate?", coincideTomate);
```

Este es un **fragmento para agregar al manejador existente**, no otro programa completo. Prueba con `tom`, `TOM`, `lech` y un campo vacío. ¿Por qué una búsqueda vacía coincide con cualquier cadena? No agregues otro listener `input` que haga lo mismo: modifica el que ya existe.

### Comprender la actualización de una lista

Para mostrar de nuevo una colección sin duplicar resultados, necesitarás limpiar el contenido anterior y crear los elementos vigentes. Este ejemplo es **temporal**; colócalo al final de las pruebas y recarga para recuperar las tarjetas iniciales:

```js
const panelParaPrueba = document.getElementById("listaCultivos");
panelParaPrueba.replaceChildren();

const textoTemporal = document.createElement("p");
textoTemporal.textContent = "La lista se ha vaciado para volver a construirla";
panelParaPrueba.append(textoTemporal);
```

`replaceChildren()` sin argumentos elimina los hijos del contenedor, no el contenedor. En el reto tendrás que decidir cuándo llamarlo y qué elementos volver a agregar a partir de los datos.

### Actividades

1. Cambia el título principal de la sección de cultivos por otro texto mediante JavaScript y vuelve al texto original.
2. Con `document.querySelector()` selecciona la primera tarjeta usando el selector `".crop-card"`. Verifica su contenido mediante la consola.
3. Agrega un segundo elemento creado dinámicamente, con nombre y estado visible. Conserva la estructura de clases de Bootstrap.
4. Prueba `listaEjemplo.replaceChildren()` **en un fragmento de prueba**, observa qué contenido desaparece y recarga el documento para restaurarlo. Explica cómo podría servir para pintar una lista actualizada sin duplicar tarjetas.
5. Crea un pequeño aviso con `document.createElement("p")` y `classList.add("alert", "alert-info")`. Insértalo en la sección de cultivos.
6. Cambia el evento `input` por `change` en el ejemplo de búsqueda y compara cuándo se ejecuta en tu navegador.

### Depuración

Provoca intencionalmente un error escribiendo `getElementByID` (con `D` mayúscula) en lugar de `getElementById`. Consulta la Consola, identifica el nombre correcto del método y vuelve a ejecutar.

**Comprobación:** al menos un elemento debe crearse desde JavaScript y un evento debe responder a una acción real sin recargar la página. Antes de avanzar, comenta o elimina los cambios de demostración que no vayas a integrar al gestor.

---

## Práctica 1.7 — Formularios y validación de entradas

En la sección **Registrar un cultivo** hay cuatro controles. El HTML define el formulario; JavaScript debe leer sus datos, comprobarlos y reaccionar. No necesitas enviar información a un servidor. El formulario tiene el atributo `novalidate` para que puedas practicar las validaciones mediante JavaScript, en lugar de depender exclusivamente de los mensajes automáticos del navegador.

### Diferenciar el valor de un campo y el dato que necesita la aplicación

Al leer un `input` de tipo numérico mediante `.value`, recibes un **texto**. Revisa los cuatro campos del formulario: `nombreCultivo`, `diasCultivo`, `aguaCultivo` y `estadoCultivo`.

| Campo | Ejemplo de `.value` | Dato esperado después de validar |
| --- | --- | --- |
| Nombre | `" Albahaca "` | `"Albahaca"` (texto sin espacios externos) |
| Días | `"10"` | `10` (número entero) |
| Agua | `"2.5"` | `2.5` (número finito) |
| Estado | `"semilla"` | `"semilla"` (una opción permitida) |

El formulario incluye `novalidate` para practicar las comprobaciones mediante JavaScript. Aunque algunos navegadores impiden escribir determinados caracteres en los campos numéricos, **no debes considerar eso como sustituto de la validación propia**.

**Antes de programar:** inspecciona los atributos `id` y `name` de los cuatro controles. `getElementById()` utiliza el `id`. Después identifica dónde se utiliza `preventDefault()` en el manejador `submit`.

### Evitar el envío tradicional y leer datos

Agrega en `js/main.js`, después de los ejemplos anteriores:

```js
const formularioEjemplo = document.getElementById("formCultivo");
const mensajeEjemplo = document.getElementById("mensajeFormulario");

formularioEjemplo.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombreCultivo").value.trim();
  const diasTexto = document.getElementById("diasCultivo").value.trim();
  const dias = Number(diasTexto);

  if (nombre === "" || diasTexto === "" || !Number.isInteger(dias) || dias < 0) {
    mensajeEjemplo.className = "mt-3 alert alert-danger";
    mensajeEjemplo.textContent = "Revisa el nombre y los días del cultivo.";
    return;
  }

  mensajeEjemplo.className = "mt-3 alert alert-success";
  mensajeEjemplo.textContent = "Datos básicos válidos: " + nombre + " (" + dias + " días)";
});
```

`submit` se produce al enviar el formulario mediante el botón o con Enter. `preventDefault()` evita su comportamiento habitual de navegación o recarga. `trim()` elimina espacios al comienzo y al final. `Number()` convierte el texto a número, mientras `Number.isInteger()` comprueba que los días sean enteros.

Este ejemplo **todavía no registra ningún cultivo**: solo valida nombre y días. Tampoco valida los campos de agua y estado; esos son parte de tu trabajo posterior.

### Completar las validaciones paso a paso

El ejemplo anterior valida nombre y días. Practica ahora con los dos datos restantes **dentro del mismo manejador `submit`**, después de la primera condición `if` y antes de mostrar el mensaje de éxito:

```js
const aguaTexto = document.getElementById("aguaCultivo").value.trim();
const agua = Number(aguaTexto);
const estado = document.getElementById("estadoCultivo").value;

if (aguaTexto === "" || !Number.isFinite(agua) || agua < 0) {
  mensajeEjemplo.className = "mt-3 alert alert-danger";
  mensajeEjemplo.textContent = "Revisa la cantidad de agua.";
  return;
}
```

Este fragmento **no es un programa independiente**. `Number.isFinite()` es útil para confirmar que la conversión produjo un número finito. No olvides que `0` es una cantidad permitida en este ejercicio, mientras que un campo vacío no significa cero.

Todavía falta comprobar el estado. Puedes contrastarlo con el conjunto permitido usando condiciones lógicas o el método `includes()` de un arreglo. Por ejemplo:

```js
const estadosPermitidos = ["semilla", "crecimiento", "cosecha"];
console.log(estadosPermitidos.includes("crecimiento")); // true
console.log(estadosPermitidos.includes("desconocido")); // false
```

Este último ejemplo **puede ejecutarse de manera independiente** en `js/fundamentos.js`. Aplica la misma idea al valor de `estado` dentro del formulario. Si no es una opción permitida, muestra un error y detén la operación mediante `return`.

### Construir un objeto a partir de datos ya validados

Una vez que los cuatro valores hayan superado todas las condiciones, podrás representarlos como un solo registro. Agrega el siguiente **fragmento dentro del manejador `submit`, después de tus validaciones**:

```js
const registroDeEnsayo = {
  nombre: nombre,
  dias: dias,
  agua: agua,
  estado: estado
};

console.table([registroDeEnsayo]);
```

La parte izquierda de cada entrada es el nombre de la propiedad; la derecha es el dato leído y validado. Se permite escribir, por ejemplo, `nombre` en vez de `nombre: nombre` cuando ambos tienen el mismo identificador, pero utiliza primero la versión explícita para comprender qué ocurre.

**Comprueba:** escribe `Orégano`, `9`, `1.25` y `crecimiento`. El objeto debe conservar `nombre` y `estado` como cadenas, y `dias` y `agua` como números. Cambia solamente el estado y comprueba que la estructura del objeto no cambia.

### Ejercicio puente — Guardar registros sin construir todavía el gestor

Antes de resolver las tarjetas dinámicas, realiza esta tarea limitada:

1. Declara un **arreglo vacío de ensayo** fuera del evento `submit`.
2. Cada vez que el formulario reciba cuatro datos válidos, agrega el objeto que construiste al arreglo con `push()`.
3. Después de agregarlo, utiliza `console.table()` para mostrar **todos** los registros de ensayo.
4. Intenta enviar un formulario inválido: el arreglo no debe cambiar.
5. Realiza dos registros válidos consecutivos: el arreglo debe contener dos objetos diferentes con sus propias propiedades.

Para comprobar tu solución, usa estas entradas:

| Registro | Nombre | Días | Agua | Estado | Resultado |
| --- | --- | --- | --- | --- | --- |
| 1 | Albahaca | 10 | 2.5 | semilla | Agrega un objeto |
| 2 | Perejil | 0 | 0 | crecimiento | Agrega un segundo objeto |
| 3 | Nombre vacío | 4 | 1 | cosecha | No agrega objeto |

**No actualices todavía las tarjetas ni los indicadores.** El objetivo es comprender la secuencia `leer → validar → crear objeto → agregar al arreglo`. En el reto integrador decidirás cómo utilizar esa colección para actualizar toda la interfaz.

Si repites el ejercicio, reutiliza o reemplaza el listener `submit` anterior: varios manejadores que registren el mismo formulario pueden producir duplicaciones.

### Actividades

1. Envía el formulario con nombre `Albahaca` y días `12`. Debe aparecer un mensaje de éxito con esos datos básicos.
2. Escribe un nombre formado solamente por espacios. ¿Por qué es inválido?
3. Prueba los días `0`, `-1`, `1.5`, `"abc"` y el campo vacío. Los números negativos, los decimales y el campo vacío deben rechazarse. El navegador puede impedir algunas entradas antes de que JavaScript las reciba; para observar la lógica puedes probar conversiones por separado en la Consola.
4. Lee también el campo de agua. Antes de convertirlo, verifica si está vacío. Rechaza valores negativos, texto no numérico y valores no finitos; acepta `0` y `2.5`.
5. Lee `estadoCultivo`. Acepta solo `"semilla"`, `"crecimiento"` o `"cosecha"`.
6. Haz que el mensaje de error indique qué campo necesita corrección en vez de mostrar un texto genérico.
7. Comprueba que ningún envío inválido cambie los indicadores ni agregue tarjetas.

8. Ejecuta el ejercicio puente con dos registros válidos y uno inválido. Verifica el tamaño del arreglo después de cada intento.
9. Comprueba que `agua = 1.25` se almacena como número y no como cadena; el campo tiene `step="any"` para permitir decimales de distinta precisión.

### Depuración: error de datos

Evalúa primero `Number("")` en la Consola. Después quita temporalmente la comprobación `diasTexto === ""` de tu ejercicio, deja los días vacíos y observa si la conversión podría aceptar un dato no ingresado. Restaura la condición.

**Comprobación:** se debe impedir la recarga del formulario, mostrar retroalimentación legible y rechazar explícitamente valores vacíos o no permitidos. En la actividad integradora utilizarás esa validación para crear objetos, no solamente mensajes. Reutiliza este controlador de `submit` o reemplázalo al integrar la solución: no dejes dos manejadores que procesen el mismo registro por duplicado.

---

## Práctica 1.8 — Depurar código y comprobar comportamiento

Algunos errores detienen la ejecución y muestran un mensaje; otros permiten que el programa funcione, pero producen resultados incorrectos. Para investigar conviene reproducir el problema con pocos datos, observar qué sucede y cambiar **una cosa a la vez**.

### Un procedimiento para investigar

1. Predice cuál debería ser el resultado.
2. Ejecuta el código y lee el mensaje de la Consola, si lo hay.
3. Anota el archivo, la línea señalada y el valor de las variables relevantes.
4. Utiliza `console.log()` o `console.table()` para observar valores intermedios.
5. Formula una explicación de la causa antes de editar.
6. Corrige el código y repite la prueba original.
7. Añade otro caso de prueba para confirmar que la corrección no introdujo un problema nuevo.

Los ejemplos siguientes contienen **errores intencionales**. Ejecútalos por separado en `js/fundamentos.js` o, cuando se indique DOM, en `js/main.js`. Comenta el fragmento después de investigar: un error de sintaxis en el archivo puede impedir que se ejecuten otras prácticas.

### Caso A — Error de sintaxis

```js
console.log("Comenzó el registro"
```

Intenta ejecutar. ¿Qué símbolo falta para cerrar correctamente la instrucción? Corrígelo y comprueba que se muestra el mensaje.

### Caso B — Variable inexistente

```js
const nombreCorrecto = "Tomate";
console.log(nombreCorrepto);
```

Observa `ReferenceError`. Compara el nombre declarado con el utilizado y corrige la diferencia. JavaScript distingue las letras y también su orden.

### Caso C — Acceso a una propiedad inexistente

```js
const cultivoDesconocido = null;
console.log(cultivoDesconocido.nombre);
```

Identifica el tipo de problema. Antes de acceder a `nombre`, comprueba si el valor contiene un objeto válido. Prueba luego reemplazando `null` por `{ nombre: "Tomate" }`.

### Caso D — Conversión incorrecta

```js
const unidadesTexto = "5";
const nuevasUnidades = 2;
const unidadesTotales = unidadesTexto + nuevasUnidades;
console.log(unidadesTotales);
```

Se esperan `7` unidades, pero el resultado es otro. Comprueba el tipo de cada variable y realiza la conversión apropiada antes de sumar.

### Caso E — Asignación dentro de una condición

```js
let estadoParaDepurar = "semilla";

if (estadoParaDepurar = "cosecha") {
  console.log("Listo para cosechar");
} else {
  console.log("Aún no está listo");
}

console.log("Estado final:", estadoParaDepurar);
```

**Predice:** ¿por qué muestra cosecha si el estado inicial era semilla? Inspecciona el estado antes y después del `if`. Corrige el operador para **comparar** sin modificar accidentalmente el dato.

### Caso F — Índice fuera del arreglo

```js
const registrosDePrueba = [
  { nombre: "Tomate" },
  { nombre: "Lechuga" }
];

console.log(registrosDePrueba[2].nombre);
```

El arreglo tiene dos elementos, pero sus índices son `0` y `1`. Antes de acceder al nombre, comprueba si la posición solicitada existe. Prueba las posiciones `0`, `1` y `2` y explica la diferencia.

### Caso G — Selector del DOM que no encuentra un elemento

En `js/main.js`, prueba temporalmente:

```js
const panelInexistente = document.getElementById("listaDeCultivos");
console.log(panelInexistente);
panelInexistente.textContent = "Prueba";
```

En `index.html` el identificador real es `listaCultivos`. Inspecciona el error que produce leer una propiedad de `null`. Corrige el identificador y elimina el fragmento cuando termines. No cambies el HTML solamente para ocultar un error de escritura en JavaScript.

### Caso H — Error lógico que no detiene el programa

```js
const estadosDePrueba = ["cosecha", "semilla", "cosecha"];
let contadorCosecha = 0;

for (const estado of estadosDePrueba) {
  contadorCosecha++;
}

console.log(contadorCosecha);
```

Este programa imprime `3`, pero solo **2** elementos cumplen el criterio de cosecha. Modifica el cuerpo del ciclo para contar únicamente los estados correctos. Después prueba un arreglo sin cosechas y otro con todas sus entradas en cosecha.

### Herramientas para localizar problemas

La Consola muestra errores y valores. También puedes utilizar `console.table(arreglo)` para revisar objetos, `console.error(mensaje)` para mostrar mensajes de prueba y la pestaña **Sources/Fuentes** del navegador para colocar un punto de interrupción (*breakpoint*). Prueba una pausa dentro del `for` del caso H y observa cómo cambia `contadorCosecha` en cada iteración.

Si una tarjeta no aparece en la página, revisa primero tres puntos: **el objeto tiene datos**, **la función crea los elementos** y **el contenedor recibe esos elementos**. Si un formulario agrega dos registros por clic, comprueba si registraste el mismo listener `submit` más de una vez.

**Comprobación:** una vez corregidos los ejercicios de ensayo, `fundamentos.html` y `index.html` deben abrirse sin errores no intencionales. Explica al menos un error de sintaxis, uno de ejecución y uno lógico, indicando cómo los detectaste.

---

## Actividad integradora — Construye un gestor básico de cultivos

### Situación

EcoHuerta muestra tres cultivos y un formulario, pero inicialmente sus indicadores, tarjetas y controles son ilustrativos. Necesitas transformarlo en una aplicación que mantenga una colección de cultivos en memoria y permita consultar y registrar información desde la interfaz.

Trabaja principalmente en `js/main.js`; puedes realizar ajustes puntuales en `index.html` o `css/style.css` si son necesarios. No reemplaces Bootstrap ni cambies los identificadores que utiliza el ejercicio.

### Preparar el archivo antes del reto

Los ejemplos de las prácticas 1.6 y 1.7 se utilizaron para observar comportamientos aislados. Antes de integrar la aplicación:

1. Comenta o retira de `js/main.js` las tarjetas de demostración y las pruebas de selección que no formen parte de tu diseño definitivo.
2. Conserva **un solo** manejador para el evento `submit` del formulario.
3. Decide si reutilizarás tus funciones y validaciones anteriores; evita mantener dos arreglos que pretendan representar el mismo catálogo.
4. Comprueba que las tarjetas iniciales del HTML sean reemplazadas por las generadas desde el arreglo **sin duplicarlas**.
5. Inicia con los tres cultivos de ejemplo y realiza las pruebas obligatorias de la actividad.

Lo que ya practicabas por separado ahora se conecta mediante el flujo **datos → validación → actualización del arreglo → actualización visual**. No necesitas utilizar todos los ejemplos anteriores al mismo tiempo.

### Datos iniciales

Utiliza este arreglo como punto de partida para tus propios algoritmos:

```js
const cultivos = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];
```

**Reglas del modelo:**

- `nombre`: texto no vacío después de quitar espacios al principio y al final; máximo 50 caracteres.
- `dias`: número entero, igual o mayor que cero.
- `agua`: número finito, igual o mayor que cero; admite decimales.
- `estado`: únicamente `semilla`, `crecimiento` o `cosecha`.
- Los estados son etiquetas registradas por el usuario; **no se deducen automáticamente** de los días de cultivo.
- Los nombres pueden repetirse: dos registros distintos podrían representar cultivos con el mismo nombre.
- No se usa base de datos ni se envían datos a un servidor. Los registros se
  guardan en `localStorage` y persisten en el mismo navegador. Si los datos
  guardados son inválidos o el almacenamiento está bloqueado, se informa el
  problema y se muestran los cultivos de ejemplo.

### Requisitos funcionales

**A. Mostrar la lista desde JavaScript**

Al cargar `index.html` deben aparecer tarjetas a partir del arreglo. El contenido estático de `listaCultivos` debe sustituirse por contenido generado por tu código; evita que permanezcan tarjetas duplicadas.

Cada tarjeta debe mostrar el nombre, los días, el agua semanal en litros y el estado. Usa las clases de Bootstrap para conservar la cuadrícula adaptable y diferenciar visualmente los estados. Construye la información recibida del usuario como texto, no como HTML interpretado.

**B. Calcular indicadores**

Los elementos `totalCultivos`, `totalCrecimiento` y `totalCosecha` deben mostrar, respectivamente, el número total de registros, cuántos tienen estado `crecimiento` y cuántos tienen estado `cosecha`.

Los indicadores deben calcularse a partir de **todos los registros**, no solamente de los que estén visibles por un filtro. Deben actualizarse cuando se agregue un cultivo válido.

**C. Registrar un cultivo**

Al enviar `formCultivo`, lee `nombreCultivo`, `diasCultivo`, `aguaCultivo` y `estadoCultivo`. Valida todos los campos según las reglas anteriores. Si son válidos, crea un objeto, agrégalo al arreglo y actualiza la lista y los indicadores. Muestra una confirmación en `mensajeFormulario` y limpia el formulario; si hay un error, muestra un mensaje útil, conserva los datos para corregirlos y no modifiques el arreglo.

**D. Buscar por nombre**

El campo `busqueda` debe mostrar solo los cultivos cuyo nombre contenga el texto escrito, sin distinguir mayúsculas y minúsculas. Una búsqueda vacía muestra todos los registros compatibles con el filtro de estado.

**E. Filtrar por estado**

`filtroEstado` debe admitir `todos`, `semilla`, `crecimiento` y `cosecha`. Cuando búsqueda y filtro estén activos al mismo tiempo, muestra únicamente cultivos que cumplan **ambas** condiciones.

**F. Estado sin resultados**

Cuando la búsqueda y el filtro no encuentren registros, no deben quedar tarjetas antiguas. Muestra el aviso `sinResultados`; ocúltalo en cuanto exista al menos una coincidencia.

### Una estrategia de construcción por etapas

1. Define el arreglo inicial y comprueba su contenido mediante `console.table(cultivos)`.
2. Escribe una función que reciba una lista de objetos y dibuje tarjetas. Prueba primero con un único cultivo y luego con tres.
3. Escribe una función independiente para actualizar los tres indicadores.
4. Comprueba que ambos pasos funcionen al cargar la página.
5. Añade el evento del formulario y valida cada campo. Solo después incorpora `push()` y actualiza la interfaz.
6. Implementa la búsqueda y el filtro; prueba cada uno individualmente y finalmente juntos.
7. Resuelve el caso sin resultados y revisa las entradas incorrectas.
8. Quita los `console.log()` de exploración que ya no aporten información útil y ejecuta todos los casos de prueba.

**Pistas, sin solución completa:** recuerda `getElementById()`, `addEventListener()`, `textContent`, `createElement()`, `replaceChildren()`, `push()`, `for...of`, `toLowerCase()`, `includes()` y `Number.isFinite()`. Puedes mantener la lógica en funciones pequeñas como «dibujar tarjetas», «contar estados», «leer y validar datos» y «aplicar filtros», pero decide tú sus parámetros y valores de retorno.

### Casos de prueba obligatorios

| Nº | Acción | Resultado esperado |
| --- | --- | --- |
| 1 | Abrir `index.html` sin interactuar | Tres tarjetas; total **3**, crecimiento **1**, cosecha **1** |
| 2 | Buscar `tom` | Solo aparece **Tomate** |
| 3 | Buscar `TOM` | Aparece también **Tomate** |
| 4 | Buscar `xyz` | Cero tarjetas; aviso «No hay cultivos…» visible |
| 5 | Borrar búsqueda y elegir `semilla` | Solo aparece **Zanahoria** |
| 6 | Buscar `lech` y elegir `cosecha` | Cero tarjetas; aviso visible |
| 7 | Borrar búsqueda y elegir `todos` | Vuelven los tres cultivos |
| 8 | Registrar `Albahaca`, 10 días, 2.5 litros, `semilla` | Cuatro registros; total **4**, crecimiento **1**, cosecha **1** |
| 9 | Registrar `Perejil`, 0 días, 0 litros, `crecimiento` | Registro válido; total **5**, crecimiento **2**, cosecha **1** |
| 10 | Nombre vacío o solo espacios | No se agrega registro; mensaje de error |
| 11 | Días vacíos, negativos o decimales | No se agrega registro |
| 12 | Agua vacía o negativa | No se agrega registro |
| 13 | Estado sin seleccionar | No se agrega registro |
| 14 | Escribir `<b>Prueba</b>` como nombre | El texto se muestra literalmente; no se interpreta como etiqueta HTML |
| 15 | Filtrar después de agregar un cultivo | El nuevo registro se puede localizar si coincide con las condiciones |
| 16 | Registrar un cultivo inválido | Los indicadores conservan sus valores previos |
| 17 | Recargar la página después de agregar registros | Se conservan los cultivos y los indicadores; para repetir el caso desde cero, elimina la clave `ecohuerta.cultivos.v1` del almacenamiento local |

Para las pruebas 8 y 9, limpia la búsqueda y deja el filtro en «Todos» cuando necesites comprobar todas las tarjetas. Recuerda que el total de registros no depende del filtro elegido.

### Revisión de la solución

Antes de entregar, comprueba lo siguiente:

- [ ] Puedo explicar qué contiene cada objeto del arreglo y por qué lo utilizo.
- [ ] Puedo señalar dónde se usan variables, condiciones, ciclos y funciones.
- [ ] Los nombres de propiedades e identificadores coinciden en HTML y JavaScript.
- [ ] No hay tarjetas repetidas ni contadores que permanezcan desactualizados.
- [ ] Los datos vacíos y numéricos inválidos no crean registros.
- [ ] Las búsquedas funcionan con diferentes mayúsculas y minúsculas.
- [ ] La búsqueda combinada con el filtro funciona incluso sin coincidencias.
- [ ] La Consola no presenta errores no intencionales al interactuar con la página.
- [ ] Comprendo que los registros se conservan en el almacenamiento local de este navegador y que no se sincronizan con otros dispositivos.

### Ampliaciones opcionales

Realiza estas ampliaciones **solo después de cumplir las pruebas obligatorias**:

1. Agrega un botón **Eliminar** a cada tarjeta. Al pulsarlo debe eliminarse exclusivamente el cultivo correspondiente y recalcularse la interfaz. Piensa cómo identificar cada registro si hay dos cultivos con el mismo nombre.
2. **Implementada en esta solución:** guarda el arreglo con `localStorage.setItem()` y `JSON.stringify()`; al abrir la página recupéralo con `localStorage.getItem()` y `JSON.parse()`. Valida la información recuperada antes de utilizarla y considera la clave ausente, los datos inválidos y el almacenamiento no disponible.
3. Agrega un indicador que muestre el total de litros semanales necesarios para todos los cultivos.
4. Permite ordenar la lista por nombre o por días de cultivo, sin cambiar los valores almacenados.
5. Añade un modo oscuro utilizando `data-bs-theme` de Bootstrap y registra la preferencia del usuario.

Las ampliaciones 1 y 3–5 siguen siendo opcionales. La persistencia (ampliación 2) ya está implementada en esta solución.

---

## Evidencias de trabajo

Conserva el proyecto con los archivos `fundamentos.html`, `index.html`, `css/style.css`, `js/fundamentos.js` y `js/main.js`. En el `README.md` añade una sección breve con:

- Cómo abrir y ejecutar el proyecto.
- Qué funcionalidades implementaste.
- Tres casos de prueba realizados y sus resultados.
- Un problema que encontraste, cómo lo identificaste y cómo lo resolviste.

Prepara una demostración en la que puedas ejecutar la aplicación, introducir un registro válido, probar uno inválido, combinar búsqueda y filtro y explicar una función escrita por ti. El código ejecutable y la comprobación de su comportamiento son la evidencia principal: no necesitas elaborar un informe aparte.

## Referencias de consulta

Consulta estos recursos cuando necesites ampliar una explicación o comprobar un método. Las instrucciones y ejemplos del laboratorio están incluidos en este documento.

- [Guía de JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- [Introducción a JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction).
- [Bootstrap 5.3 — Documentación oficial](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
