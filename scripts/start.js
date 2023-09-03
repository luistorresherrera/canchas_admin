import { pintarTablaDobleEntrada } from "./table.js";

export const reestablecerStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
  const diasSemana = [
    {
      id: 1,
      nombre: "Lunes",
      activado: true,
      precioDia: 120,
      precioNoche: 150,
    },
    {
      id: 2,
      nombre: "Martes",
      activado: true,
      precioDia: 120,
      precioNoche: 150,
    },
    {
      id: 3,
      nombre: "Miércoles",
      activado: true,
      precioDia: 120,
      precioNoche: 150,
    },
    {
      id: 4,
      nombre: "Jueves",
      activado: true,
      precioDia: 120,
      precioNoche: 150,
    },
    {
      id: 5,
      nombre: "Viernes",
      activado: true,
      precioDia: 120,
      precioNoche: 150,
    },
    {
      id: 6,
      nombre: "Sábado",
      activado: true,
      precioDia: 150,
      precioNoche: 180,
    },
    {
      id: 7,
      nombre: "Domingo",
      activado: true,
      precioDia: 150,
      precioNoche: 180,
    },
  ];
  const jsonDiasSemana = JSON.stringify(diasSemana);
  localStorage.setItem("dias_semana", jsonDiasSemana);

  localStorage.setItem("hora_apertura", 0);
  localStorage.setItem("hora_cierre", 24);

  const x = localStorage.getItem("hora_apertura");
  const y = localStorage.getItem("hora_cierre");
  setearHorario(x, y);
};

export const setearHorario = (x, y) => {
  const horasDia = [];
  for (let i = Number(x); i < Number(y); i++) {
    horasDia.push({
      id: i,
      inicio: `${i}`,
      fin: `${i + 1}`,
      activado: true,
    });

    const jsonHorasDia = JSON.stringify(horasDia);
    localStorage.setItem("horas_dia", jsonHorasDia);
  }
};

export const setearDiasActivos = (
  L,
  Ld,
  Ln,
  M,
  Md,
  Mn,
  X,
  Xd,
  Xn,
  J,
  Jd,
  Jn,
  V,
  Vd,
  Vn,
  S,
  Sd,
  Sn,
  D,
  Dd,
  Dn
) => {
  localStorage.removeItem("dias_semana");
  const diasSemana = [
    { id: 1, nombre: "Lunes", activado: L, precioDia: Ld, precioNoche: Ln },
    { id: 2, nombre: "Martes", activado: M, precioDia: Md, precioNoche: Mn },
    { id: 3, nombre: "Miércoles", activado: X, precioDia: Xd, precioNoche: Xn },
    { id: 4, nombre: "Jueves", activado: J, precioDia: Jd, precioNoche: Jn },
    { id: 5, nombre: "Viernes", activado: V, precioDia: Vd, precioNoche: Vn },
    { id: 6, nombre: "Sábado", activado: S, precioDia: Sd, precioNoche: Sn },
    { id: 7, nombre: "Domingo", activado: D, precioDia: Dd, precioNoche: Dn },
  ];
  const jsonDiasSemana = JSON.stringify(diasSemana);
  localStorage.setItem("dias_semana", jsonDiasSemana);
};
