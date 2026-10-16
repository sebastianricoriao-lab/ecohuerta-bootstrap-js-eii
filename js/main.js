// EcoHuerta — Laboratorio 1
// Gestor de cultivos con filtros, validación y almacenamiento local.

const ESTADOS_PERMITIDOS = ["semilla", "crecimiento", "cosecha"];
const MAX_NOMBRE = 50;
const CLAVE_CULTIVOS = "ecohuerta.cultivos.v1";

const CULTIVOS_INICIALES = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

const ETIQUETAS_ESTADO = {
  semilla: "Semilla",
  crecimiento: "Crecimiento",
  cosecha: "Cosecha"
};

const CLASES_ESTADO = {
  semilla: "text-bg-secondary",
  crecimiento: "text-bg-warning",
  cosecha: "text-bg-success"
};

const listaCultivos = document.getElementById("listaCultivos");
const avisoSinResultados = document.getElementById("sinResultados");
const avisoAlmacenamiento = document.getElementById("avisoAlmacenamiento");
const totalCultivos = document.getElementById("totalCultivos");
const totalCrecimiento = document.getElementById("totalCrecimiento");
const totalCosecha = document.getElementById("totalCosecha");
const campoBusqueda = document.getElementById("busqueda");
const filtroEstado = document.getElementById("filtroEstado");
const formulario = document.getElementById("formCultivo");
const mensajeFormulario = document.getElementById("mensajeFormulario");
const campoNombre = document.getElementById("nombreCultivo");
const campoDias = document.getElementById("diasCultivo");
const campoAgua = document.getElementById("aguaCultivo");
const campoEstado = document.getElementById("estadoCultivo");

function esCultivoValido(cultivo) {
  return (
    cultivo !== null &&
    typeof cultivo === "object" &&
    !Array.isArray(cultivo) &&
    typeof cultivo.nombre === "string" &&
    cultivo.nombre.trim() !== "" &&
    cultivo.nombre.trim().length <= MAX_NOMBRE &&
    Number.isInteger(cultivo.dias) &&
    cultivo.dias >= 0 &&
    typeof cultivo.agua === "number" &&
    Number.isFinite(cultivo.agua) &&
    cultivo.agua >= 0 &&
    ESTADOS_PERMITIDOS.includes(cultivo.estado)
  );
}

function mostrarAvisoAlmacenamiento(mensaje) {
  avisoAlmacenamiento.textContent = mensaje;
  avisoAlmacenamiento.classList.remove("d-none");
}

function cargarCultivos() {
  let datosGuardados;
  try {
    datosGuardados = localStorage.getItem(CLAVE_CULTIVOS);
  } catch (error) {
    console.error("No se pudieron leer los cultivos guardados.", error);
    mostrarAvisoAlmacenamiento(
      "El navegador no permite acceder al almacenamiento. Los cultivos estarán disponibles solo mientras esta página permanezca abierta."
    );
    return CULTIVOS_INICIALES.map((cultivo) => ({ ...cultivo }));
  }

  if (datosGuardados === null) {
    return CULTIVOS_INICIALES.map((cultivo) => ({ ...cultivo }));
  }

  let cultivosGuardados;
  try {
    cultivosGuardados = JSON.parse(datosGuardados);
  } catch (error) {
    console.error("Los cultivos guardados no contienen JSON válido.", error);
    mostrarAvisoAlmacenamiento(
      "No se pudieron leer los cultivos guardados. Se muestran los cultivos de ejemplo; al agregar un cultivo se reemplazarán los datos guardados."
    );
    return CULTIVOS_INICIALES.map((cultivo) => ({ ...cultivo }));
  }

  if (
    !Array.isArray(cultivosGuardados) ||
    !cultivosGuardados.every(esCultivoValido)
  ) {
    console.error("Los cultivos guardados no tienen el formato esperado.");
    mostrarAvisoAlmacenamiento(
      "Los datos guardados no tienen un formato válido. Se muestran los cultivos de ejemplo; al agregar un cultivo se reemplazarán los datos guardados."
    );
    return CULTIVOS_INICIALES.map((cultivo) => ({ ...cultivo }));
  }

  return cultivosGuardados.map((cultivo) => ({
    nombre: cultivo.nombre.trim(),
    dias: cultivo.dias,
    agua: cultivo.agua,
    estado: cultivo.estado
  }));
}

const cultivos = cargarCultivos();

function crearTarjetaCultivo(cultivo) {
  const columna = document.createElement("div");
  columna.className = "col-md-6 col-lg-4";

  const tarjeta = document.createElement("article");
  tarjeta.className = "card crop-card h-100";

  const portada = document.createElement("div");
  portada.className = "crop-cover crop-generico";
  portada.textContent = cultivo.nombre.toLocaleUpperCase();
  portada.setAttribute("aria-hidden", "true");

  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";

  const encabezado = document.createElement("div");
  encabezado.className = "d-flex justify-content-between gap-2 align-items-center";

  const titulo = document.createElement("h3");
  titulo.className = "h5 mb-0";
  titulo.textContent = cultivo.nombre;

  const insignia = document.createElement("span");
  insignia.className = "badge " + CLASES_ESTADO[cultivo.estado];
  insignia.textContent = ETIQUETAS_ESTADO[cultivo.estado];
  encabezado.append(titulo, insignia);

  const detalle = document.createElement("p");
  detalle.className = "text-secondary small mt-3 mb-0";
  detalle.textContent =
    "Días de cultivo: " +
    cultivo.dias +
    " · Agua por semana: " +
    cultivo.agua +
    " L";

  cuerpo.append(encabezado, detalle);
  tarjeta.append(portada, cuerpo);
  columna.append(tarjeta);
  return columna;
}

function mostrarCultivos(lista) {
  listaCultivos.replaceChildren();
  for (const cultivo of lista) {
    listaCultivos.append(crearTarjetaCultivo(cultivo));
  }
  avisoSinResultados.classList.toggle("d-none", lista.length > 0);
}

function contarPorEstado(lista, estadoBuscado) {
  let total = 0;
  for (const cultivo of lista) {
    if (cultivo.estado === estadoBuscado) total++;
  }
  return total;
}

function actualizarIndicadores() {
  totalCultivos.textContent = String(cultivos.length);
  totalCrecimiento.textContent = String(
    contarPorEstado(cultivos, "crecimiento")
  );
  totalCosecha.textContent = String(contarPorEstado(cultivos, "cosecha"));
}

function filtrarCultivos() {
  const texto = campoBusqueda.value.trim().toLocaleLowerCase();
  const estado = filtroEstado.value;
  return cultivos.filter((cultivo) => {
    const coincideNombre = cultivo.nombre.toLocaleLowerCase().includes(texto);
    const coincideEstado = estado === "todos" || cultivo.estado === estado;
    return coincideNombre && coincideEstado;
  });
}

function aplicarFiltros() {
  mostrarCultivos(filtrarCultivos());
}

function leerYValidarFormulario() {
  const errores = [];
  const camposInvalidos = [];
  const nombre = campoNombre.value.trim();

  if (nombre === "") {
    errores.push("El nombre es obligatorio");
    camposInvalidos.push(campoNombre);
  } else if (nombre.length > MAX_NOMBRE) {
    errores.push("El nombre no puede superar " + MAX_NOMBRE + " caracteres");
    camposInvalidos.push(campoNombre);
  }

  const diasTexto = campoDias.value.trim();
  const dias = Number(diasTexto);
  if (diasTexto === "" || !Number.isInteger(dias) || dias < 0) {
    errores.push("Los días deben ser un número entero igual o mayor que 0");
    camposInvalidos.push(campoDias);
  }

  const aguaTexto = campoAgua.value.trim();
  const agua = Number(aguaTexto);
  if (aguaTexto === "" || !Number.isFinite(agua) || agua < 0) {
    errores.push("El agua debe ser un número igual o mayor que 0");
    camposInvalidos.push(campoAgua);
  }

  const estado = campoEstado.value;
  if (!ESTADOS_PERMITIDOS.includes(estado)) {
    errores.push("Selecciona un estado válido");
    camposInvalidos.push(campoEstado);
  }

  return {
    errores: errores,
    camposInvalidos: camposInvalidos,
    cultivo: { nombre: nombre, dias: dias, agua: agua, estado: estado }
  };
}

function mostrarMensaje(tipo, texto) {
  mensajeFormulario.className = "alert mt-3 alert-" + tipo;
  mensajeFormulario.textContent = texto;
  mensajeFormulario.classList.remove("d-none");
}

function limpiarMarcasDeError() {
  for (const campo of [campoNombre, campoDias, campoAgua, campoEstado]) {
    campo.classList.remove("is-invalid");
    campo.removeAttribute("aria-invalid");
  }
}

function guardarCultivos() {
  try {
    localStorage.setItem(CLAVE_CULTIVOS, JSON.stringify(cultivos));
    avisoAlmacenamiento.classList.add("d-none");
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los cultivos.", error);
    mostrarAvisoAlmacenamiento(
      "No se pudieron guardar los cambios en este navegador. Los cultivos seguirán disponibles mientras esta página permanezca abierta."
    );
    return false;
  }
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  limpiarMarcasDeError();

  const lectura = leerYValidarFormulario();
  if (lectura.errores.length > 0) {
    for (const campo of lectura.camposInvalidos) {
      campo.classList.add("is-invalid");
      campo.setAttribute("aria-invalid", "true");
    }
    mostrarMensaje(
      "danger",
      "Revisa el formulario: " + lectura.errores.join(". ") + "."
    );
    return;
  }

  cultivos.push(lectura.cultivo);
  const guardado = guardarCultivos();
  actualizarIndicadores();
  aplicarFiltros();
  formulario.reset();
  limpiarMarcasDeError();
  mostrarMensaje(
    guardado ? "success" : "warning",
    guardado
      ? "Cultivo registrado y guardado: " + lectura.cultivo.nombre + "."
      : "Cultivo registrado en esta sesión, pero no se pudo guardar: " +
          lectura.cultivo.nombre +
          "."
  );
});

campoBusqueda.addEventListener("input", aplicarFiltros);
filtroEstado.addEventListener("change", aplicarFiltros);

document.getElementById("anio").textContent = String(new Date().getFullYear());

actualizarIndicadores();
aplicarFiltros();
