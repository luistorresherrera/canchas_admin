import { reestablecerStorage } from "./start.js";
import { pintarTablaDobleEntrada } from "./table.js";
import { crearReserva } from "./reserva.js";
import { pintarReservas } from "./reserva.js";

if (localStorage.getItem("dias_semana") == null) {
  reestablecerStorage();
}
document.getElementsByClassName("section-reservas1").innerHTML = "";

const divCalendario = document.getElementById("div-calendario");
const btnResetData = document.getElementById("reestablecer");

divCalendario.innerHTML = "";

pintarTablaDobleEntrada();
if (sessionStorage.getItem("reservas")) {
  document.getElementById("contenedor-cards").innerHTML = pintarReservas();
} else {
  document.getElementById("contenedor-cards").innerHTML =
    "<p>No hay reservas por el momento</p>";
}
//BOTON RESETAR DATA
btnResetData.addEventListener("click", () => {
  divCalendario.innerHTML = "";
  reestablecerStorage();
  location.reload();
});

//BOTON DE RESERVAR EN TABLA

const botonesreserva = document.querySelectorAll(".btnReservar");
botonesreserva.forEach((element) => {
  element.addEventListener("click", () => {
    let precio;
    let horario_inicio;
    let horario_fin;
    let dia;

    const id = element.getAttribute("id");

    let arraySplit = id.split("##", 4);
    horario_inicio = arraySplit[0];
    horario_fin = arraySplit[1];
    dia = arraySplit[2];
    precio = arraySplit[3];
    document.getElementById("horarioReserva").innerHTML = "";
    document.getElementById("precioReserva").innerHTML = "";
    document.getElementById("diaReserva").innerHTML = "";

    document.getElementById(
      "horarioReserva"
    ).innerHTML = `${horario_inicio} - ${horario_fin} hrs`;
    document.getElementById("precioReserva").innerHTML = `${precio}`;
    document.getElementById("diaReserva").innerHTML = `${dia}`;
    $("#myModal").modal("show");
    document.getElementById("diaReserva").innerHTML = button.getAttribute("id");
  });
});

//Confirmar reserva

const botonReservaCancha = document.getElementById("ConfirmarReserva");
botonReservaCancha.addEventListener("click", () => {
  let nombresReserva;
  let apPaterno;
  let apMaterno;
  let dni;
  let dia;
  let textoHorario;
  let arrayHora;
  let horaInicio;
  let horaFin;
  let precio;
  nombresReserva = document.getElementById("nombresReserva").value;

  apPaterno = document.getElementById("apPaternoReserva").value;
  apMaterno = document.getElementById("apMaternoReserva").value;
  dni = document.getElementById("dniReserva").value;

  dia = document.getElementById("diaReserva").innerHTML;
  textoHorario = document.getElementById("horarioReserva").innerHTML;
  precio = document.getElementById("precioReserva").innerHTML;
  arrayHora = textoHorario.split(" ", 4);
  horaInicio = arrayHora[0];
  horaFin = arrayHora[2];

  crearReserva(
    dia,
    horaInicio,
    horaFin,
    precio,
    dni,
    nombresReserva,
    apPaterno,
    apMaterno
  );
  divCalendario.innerHTML = "";

  location.reload();
});
