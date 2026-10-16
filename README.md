# EcoHuerta — Fundamentos de JavaScript

EcoHuerta es una aplicación web educativa construida con HTML, Bootstrap 5.3 y
JavaScript nativo. Incluye los ejercicios de fundamentos y una solución
funcional para administrar cultivos.

## Ejecutar

Abre `fundamentos.html` para ejecutar `js/fundamentos.js` y observar los
ejercicios de las prácticas 1.1–1.5 en la consola del navegador. Abre
`index.html` para usar la aplicación. No requiere Node.js, npm ni un servidor.
Se necesita conexión a Internet para cargar Bootstrap desde jsDelivr.

## Funcionalidades

- Tarjetas e indicadores generados a partir del arreglo de cultivos.
- Registro con validación de nombre, días, agua y estado.
- Búsqueda por nombre sin distinguir mayúsculas y filtro por estado; ambos se
  pueden combinar.
- Mensaje accesible cuando no hay resultados.
- Persistencia de los registros con `localStorage`, con validación al
  recuperarlos. Los datos permanecen en el mismo navegador; no se envían a un
  servidor.
- Mensajes de error si el almacenamiento del navegador no está disponible o
  contiene datos inválidos.

## Archivos principales

| Archivo | Contenido |
| --- | --- |
| [fundamentos.html](fundamentos.html) | Página de apoyo para ejecutar las prácticas en consola. |
| [js/fundamentos.js](js/fundamentos.js) | Soluciones y ejemplos de fundamentos, prácticas 1.1–1.5. |
| [index.html](index.html) | Interfaz Bootstrap y gestor de cultivos. |
| [js/main.js](js/main.js) | Renderizado, búsqueda, filtros, validación y persistencia. |
| [css/style.css](css/style.css) | Estilos complementarios de la página. |
| [practicas-1-6-a-1-8.md](practicas-1-6-a-1-8.md) | Notas y soluciones de DOM, formularios y depuración. |
| [laboratorios/laboratorio-01.md](laboratorios/laboratorio-01.md) | Guía completa del laboratorio y sus actividades. |

## Comprobaciones

1. Buscar `TOM` muestra Tomate, sin importar las mayúsculas.
2. Registrar Albahaca con 10 días, 2.5 litros y estado Semilla actualiza las
   tarjetas e indicadores; un formulario inválido no agrega registros.
3. Registrar un cultivo y recargar la página conserva la lista y sus
   indicadores.

Para repetir las pruebas desde los tres cultivos iniciales, abre la consola del
navegador, ejecuta
`localStorage.removeItem("ecohuerta.cultivos.v1")` y recarga la página.

### Problema resuelto

`Number("")` devuelve `0`, por lo que un campo de días vacío podría pasar por un
cero válido si se convierte antes de revisar el texto. El formulario primero
comprueba que los campos no estén vacíos y luego verifica el tipo y el rango de
cada dato. Los registros guardados se validan de nuevo al restaurarlos.

## Tecnología y referencias

- JavaScript nativo, HTML5 y CSS.
- Bootstrap 5.3.8 desde el CDN de jsDelivr.
- [Guía de JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
