import { buscarCliente } from "./cliente.js";
import { traerDniReserva, validarIdReserva } from "./reserva.js";

export const pintarTablaDobleEntrada = () => {
  const divCalendario = document.getElementById("div-calendario");
  const tableCalendario = document.createElement("table");
  tableCalendario.className = "table table-bordered text-center";
  const tableHead = document.createElement("thead");
  const tableBody1 = document.createElement("tbody");
  tableBody1.className = "table-group-divider";
  const tableBody2 = document.createElement("tbody");

  const row = document.createElement("tr");

  const retornoDiasSemana = JSON.parse(localStorage.getItem("dias_semana"));
  const retornoHorasDia = JSON.parse(localStorage.getItem("horas_dia"));

  const cabecera = document.createElement("th");
  const textoCel = document.createTextNode("Horario/Día");
  cabecera.appendChild(textoCel);
  row.appendChild(cabecera);
  //se ponen todos los enunciados en la cabecera de la table
  retornoDiasSemana.forEach((element) => {
    if (element.activado == true) {
      const cabecera = document.createElement("th");
      const textoCel = document.createTextNode(element.nombre);
      cabecera.appendChild(textoCel);
      row.appendChild(cabecera);
    }
  });

  tableHead.appendChild(row);

  retornoHorasDia.forEach((elementHora) => {
    //POR CADA ELEMENTO DE LA FILA CREAS UNA CABECERA Y LUEGO LA DATA

    const row = document.createElement("tr");
    const cabecera = document.createElement("th");
    const textoCel = document.createTextNode(
      `${elementHora.inicio} - ${elementHora.fin} hrs`
    );

    cabecera.appendChild(textoCel);

    row.appendChild(cabecera);
    retornoDiasSemana.forEach((elementDia) => {
      if (elementDia.activado == true) {
        const cell = document.createElement("td");
        const linkA = document.createElement("a");
        const parrafo = document.createElement("a");

        linkA.className = "btnReservar";
        let preciofinal = "";
        if (Number(elementHora.inicio) >= 6 && Number(elementHora.fin) <= 18) {
          const textoCelTD1 = document.createTextNode(
            `S/.${elementDia.precioDia}`
          );
          linkA.setAttribute(
            "id",
            `${elementHora.inicio}##${elementHora.fin}##${elementDia.nombre}##${elementDia.precioDia}`
          );
          preciofinal = elementDia.precioDia;
          linkA.appendChild(textoCelTD1);
        } else {
          const textoCelTD2 = document.createTextNode(
            `S/.${elementDia.precioNoche}`
          );
          linkA.setAttribute(
            "id",
            `${elementHora.inicio}##${elementHora.fin}##${elementDia.nombre}##${elementDia.precioNoche}`
          );
          preciofinal = elementDia.precioNoche;
          linkA.appendChild(textoCelTD2);
        }
        const validacion = validarIdReserva(
          `${elementHora.inicio}##${elementHora.fin}##${elementDia.nombre}##${preciofinal}`
        );
        if (validacion) {
          cell.appendChild(linkA);
        } else {
          const nombrecliente = buscarCliente(
            traerDniReserva(
              `${elementHora.inicio}##${elementHora.fin}##${elementDia.nombre}##${preciofinal}`
            )
          );
          const textoCelTD3 = document.createTextNode(nombrecliente);
          cell.className = "celdaBloqueada";
          parrafo.className = "nombreEnReserva";
          parrafo.appendChild(textoCelTD3);
          cell.appendChild(parrafo);
        }

        row.appendChild(cell);
      }
    });
    tableBody2.appendChild(row);
  });

  tableCalendario.appendChild(tableHead);
  tableCalendario.appendChild(tableBody1);
  tableCalendario.appendChild(tableBody2);
  divCalendario.appendChild(tableCalendario);
};
