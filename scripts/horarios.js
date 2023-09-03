import { setearHorario } from "./start.js";
import { setearDiasActivos } from "./start.js";

document.getElementById("inicioHorario").value =
  localStorage.getItem("hora_apertura");
document.getElementById("finHorario").value =
  localStorage.getItem("hora_cierre");

const pintarPreciosDeStorage = (diaElegido) => {
  const diaDeSemana = JSON.parse(localStorage.getItem("dias_semana"));
  const dia = diaDeSemana.find((item) => item.nombre == `${diaElegido}`);
  document.getElementById(`precioDia${diaElegido}`).value = Number(
    dia.precioDia
  );
  document.getElementById(`precioNoche${diaElegido}`).value = Number(
    dia.precioNoche
  );
};

pintarPreciosDeStorage("Lunes");
pintarPreciosDeStorage("Martes");
pintarPreciosDeStorage("Miércoles");
pintarPreciosDeStorage("Jueves");
pintarPreciosDeStorage("Viernes");
pintarPreciosDeStorage("Sábado");
pintarPreciosDeStorage("Domingo");

//PINTAR EN SWITCHER LOS DIAS ACTIVOS DESEDE LOCAL STORAGE
const pintarDiasActivos = () => {
  const diasretornados = JSON.parse(localStorage.getItem("dias_semana"));

  diasretornados.forEach((element) => {
    if (element.activado == true) {
      document.getElementById(`check${element.nombre}`).checked = true;
    } else {
      document.getElementById(`check${element.nombre}`).checked = false;
    }
  });
};

pintarDiasActivos();

//MODIFICAR HORARIO LABORAL
const btnHorarioLaboral = document.getElementById("btnGuardarHorarioLaboral");
btnHorarioLaboral.addEventListener("click", () => {
  const horaApertura = document.getElementById("inicioHorario").value;
  const horaCierre = document.getElementById("finHorario").value;
  if (horaApertura && horaCierre) {
    if (Number(horaApertura) < Number(horaCierre)) {
      localStorage.setItem("hora_apertura", horaApertura);
      localStorage.setItem("hora_cierre", horaCierre);
      const x = localStorage.getItem("hora_apertura");
      const y = localStorage.getItem("hora_cierre");
      setearHorario(x, y);
      alert("Horario laboral actualizado.");
    } else {
      alert("La hora de apertura tiene que se menor a la de cierre");
    }
  } else {
    alert("Por favor, completa ambas horas.");
  }
});

//MODIFICAR DIAS
const btnGuardarDias = document.getElementById("btnGuardarDias");
btnGuardarDias.addEventListener("click", () => {
  const checkLunes = document.getElementById("checkLunes").checked;

  const pdLunes = document.getElementById("precioDiaLunes").value;
  const pnLunes = document.getElementById("precioNocheLunes").value;
  const checkMartes = document.getElementById("checkMartes").checked;
  const pdMartes = document.getElementById("precioDiaMartes").value;
  const pnMartes = document.getElementById("precioNocheMartes").value;
  const checkMiercoles = document.getElementById("checkMiércoles").checked;
  const pdMiercoles = document.getElementById("precioDiaMiércoles").value;
  const pnMiercoles = document.getElementById("precioNocheMiércoles").value;
  const checkJueves = document.getElementById("checkJueves").checked;
  const pdJueves = document.getElementById("precioDiaJueves").value;
  const pnJueves = document.getElementById("precioNocheJueves").value;
  const checkViernes = document.getElementById("checkViernes").checked;
  const pdViernes = document.getElementById("precioDiaViernes").value;
  const pnViernes = document.getElementById("precioNocheViernes").value;
  const checkSabado = document.getElementById("checkSábado").checked;
  const pdSabado = document.getElementById("precioDiaSábado").value;
  const pnSabado = document.getElementById("precioNocheSábado").value;
  const checkDomingo = document.getElementById("checkDomingo").checked;
  const pdDomingo = document.getElementById("precioDiaDomingo").value;
  const pnDomingo = document.getElementById("precioNocheDomingo").value;
  setearDiasActivos(
    checkLunes,
    pdLunes,
    pnLunes,
    checkMartes,
    pdMartes,
    pnMartes,
    checkMiercoles,
    pdMiercoles,
    pnMiercoles,
    checkJueves,
    pdJueves,
    pnJueves,
    checkViernes,
    pdViernes,
    pnViernes,
    checkSabado,
    pdSabado,
    pnSabado,
    checkDomingo,
    pdDomingo,
    pnDomingo
  );
  alert("Configuración de días y precios actualizada.");
});

//MODIFICAR HORA APERTURA
const btnincrementarApertura = document.getElementById("btnMasApertura");
btnincrementarApertura.addEventListener("click", () => {
  if (Number(document.getElementById("inicioHorario").value) == 24) {
    alert("El horario no puede incrementar de 24 horas");
  } else {
    document.getElementById("inicioHorario").value =
      Number(document.getElementById("inicioHorario").value) + 1;
  }
});

const btndisminuirApertura = document.getElementById("btnMenosApertura");
btndisminuirApertura.addEventListener("click", () => {
  if (Number(document.getElementById("inicioHorario").value) == 0) {
    alert("El horario no puede disminuir de 00 horas");
  } else {
    document.getElementById("inicioHorario").value =
      Number(document.getElementById("inicioHorario").value) - 1;
  }
});

//MODIFICAR HORA CIERRE
const btnincrementarCierre = document.getElementById("btnMasCierre");
btnincrementarCierre.addEventListener("click", () => {
  if (Number(document.getElementById("finHorario").value) == 24) {
    alert("El horario no puede incrementar de 24 horas");
  } else {
    document.getElementById("finHorario").value =
      Number(document.getElementById("finHorario").value) + 1;
  }
});

const btndisminuirCierre = document.getElementById("btnMenosCierre");
btndisminuirCierre.addEventListener("click", () => {
  if (Number(document.getElementById("finHorario").value) == 0) {
    alert("El horario no puede disminuir de 00 horas");
  } else {
    document.getElementById("finHorario").value =
      Number(document.getElementById("finHorario").value) - 1;
  }
});
