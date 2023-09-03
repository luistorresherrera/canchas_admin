class cliente {
  constructor(nombres, apPaterno, apMaterno, dni) {
    this.nombres = nombres;
    this.apPaterno = apPaterno;
    this.apMaterno = apMaterno;
    this.dni = dni;
  }
}

export function crearCliente(nombres, apPaterno, apMaterno, dni) {
  const arrayClientes = [];
  if (sessionStorage.getItem("clientes")) {
    const retornoArrayCliente = JSON.parse(sessionStorage.getItem("clientes"));
    retornoArrayCliente.forEach((element) => {
      arrayClientes.push(
        new cliente(
          element.nombres,
          element.apPaterno,
          element.apMaterno,
          element.dni
        )
      );
    });
    arrayClientes.push(
      new cliente(
        nombres.toUpperCase(),
        apPaterno.toUpperCase(),
        apMaterno.toUpperCase(),
        dni
      )
    );
    sessionStorage.removeItem("clientes");
    sessionStorage.setItem("clientes", JSON.stringify(arrayClientes));
  } else {
    arrayClientes.push(
      new cliente(
        nombres.toUpperCase(),
        apPaterno.toUpperCase(),
        apMaterno.toUpperCase(),
        dni
      )
    );
    sessionStorage.setItem("clientes", JSON.stringify(arrayClientes));
  }
}

export function buscarCliente(dni) {
  let nombreCompleto = "";
  if (sessionStorage.getItem("clientes")) {
    const retornoArrayCliente2 = JSON.parse(sessionStorage.getItem("clientes"));
    retornoArrayCliente2.forEach((element) => {
      if (element.dni == dni) {
        nombreCompleto = `${element.nombres} ${element.apPaterno} ${element.apMaterno}`;
      }
    });
  }

  return nombreCompleto;
}
