import { buscarCliente } from "./cliente.js";
import { crearCliente } from "./cliente.js";

class reserva {
  constructor(dia, horaInicio, horaFin, precio, dni) {
    this.dia = dia;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.precio = precio;
    this.dni = dni;
    this.idReserva = `${horaInicio}##${horaFin}##${dia}##${precio}`;
  }
}
const arrayReservas = [];

export function crearReserva(
  dia,
  horaInicio,
  horaFin,
  precio,
  dni,
  nombresReserva,
  apPaterno,
  apMaterno
) {
  if (nombresReserva || apPaterno || apMaterno || dni) {
    // arrayReservas.splice(0, arrayReservas.length);
    if (sessionStorage.getItem("reservas")) {
      const retornoArrayReservas = JSON.parse(
        sessionStorage.getItem("reservas")
      );
      retornoArrayReservas.forEach((element) => {
        arrayReservas.push(
          new reserva(
            element.dia,
            element.horaInicio,
            element.horaFin,
            element.precio,
            element.dni
          )
        );
      });

      arrayReservas.push(new reserva(dia, horaInicio, horaFin, precio, dni));
      sessionStorage.removeItem("reservas");

      sessionStorage.setItem("reservas", JSON.stringify(arrayReservas));
      crearCliente(nombresReserva, apPaterno, apMaterno, dni);
    } else {
      arrayReservas.push(new reserva(dia, horaInicio, horaFin, precio, dni));
      sessionStorage.setItem("reservas", JSON.stringify(arrayReservas));
      crearCliente(nombresReserva, apPaterno, apMaterno, dni);
    }
  } else {
    alert("Debes copletar todos los campos.");
  }
}

export function pintarReservas() {
  let mensaje = "";
  const arrayReservas2 = JSON.parse(sessionStorage.getItem("reservas"));

  arrayReservas2.forEach((element) => {
    mensaje =
      mensaje +
      `<div class="card">
    <div>Cliente: ${buscarCliente(element.dni)}</div>
    <div>DNI: ${element.dni}</div>
    <div>Día: ${element.dia}</div>
    <div>Horario: ${element.horaInicio} - ${element.horaFin} hrs.</div>
    <div>Precio: S/.${element.precio}</div>
    </div>`;
  });

  return mensaje;
}

export function validarIdReserva(id) {
  let validarId = true;

  if (sessionStorage.getItem("reservas")) {
    const retornoArrayReservas2 = JSON.parse(
      sessionStorage.getItem("reservas")
    );
    retornoArrayReservas2.forEach((element) => {
      if (element.idReserva == id) {
        validarId = false;
      }
    });
  }

  return validarId;
}

export function traerDniReserva(id) {
  let retornoDNI = "";

  if (sessionStorage.getItem("reservas")) {
    const retornoArrayReservas2 = JSON.parse(
      sessionStorage.getItem("reservas")
    );
    retornoArrayReservas2.forEach((element) => {
      if (element.idReserva == id) {
        retornoDNI = element.dni;
      }
    });
  }

  return retornoDNI;
}
