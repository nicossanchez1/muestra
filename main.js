
// ----
// CREADOR DE STOCK
// ----
let colectivos = [
    {
      id: 1,
      cantidad: 50,
      origen: "buenos aires",
      destino: "san luis",
      precio: 500,
    },
    {
      id: 1,
      cantidad: 50,
      origen: "buenos aires",
      destino: "cordoba",
      precio: 1000,
    },
    { id: 3, cantidad: 50, origen: "cordoba", destino: "san luis", precio: 1000 },
  
    {
      id: 3,
      cantidad: 50,
      origen: "cordoba",
      destino: "buenos aires",
      precio: 700,
    },
    {
      id: 3,
      cantidad: 50,
      origen: "san luis",
      destino: "buenos aires",
      precio: 850,
    },
    { id: 3, cantidad: 50, origen: "san luis", destino: "cordoba", precio: 1000 },
  ];
  
  function agregarColectivo() {
    let cantidad = parseInt(
      prompt("Ingrese la cantidad de pasajes que va agregar a su stock")
    );
    let origen = prompt("Ingrese la terminal de origen").toLowerCase();
    let destino = prompt("Ingrese la terminal de destino").toLowerCase();
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    if (
      colectivos.some((item) => item.origen === origen) &&
      colectivos.some((item) => item.destino === destino)
    ) {
      alert("Ya existe este colectivo");
    } else {
      alert("Su Colectivo ha sido agregado correctamente");
      let objeto = {
        id: colectivos.length + 1,
        cantidad,
        origen,
        destino,
        precio,
      };
      colectivos.push(objeto);
      console.log(colectivos);
    }
  }
  
  // COMPRA DE PASAJES
  
  let pasajeros = [];
  
  const suma = (a, b) => a + b;
  const resta = (a, b) => a - (a * b) / 100;
  const iva = (x) => x * 1.21;
  
  function comprarPasaje() {
    let origen = prompt(`Ingrese terminal de origen`).toLowerCase();
    let destino = prompt(`Ingrese terminal de destino`).toLowerCase();
    let dni = parseInt(prompt("Ingrese el DNI del pasajero"));
    let nombrePasajero = prompt("Ingrese NOMBRE Y APELLIDO del pasajero");
  
    let viajeComprado =
      colectivos.some((item) => item.origen === origen) &&
      colectivos.some((item) => item.destino === destino);
  
    if (viajeComprado) {
      let objeto = {
        id: pasajeros.length + 1,
        cantidad: +1,
        origen,
        destino,
        precio,
        dni,
        nombrePasajero,
      };
      pasajeros.push(objeto);
      console.log(pasajeros);
      alert("El pasaje ha sido comprado con exito");
    } else if (
      colectivos.some((item) => item.origen != objeto) &&
      colectivos.some((item) => item.destino != objeto)
    ) {
      alert("USTED NO HA INGRESADO LAS TERMINALES CORRECTAMENTE");
    }
  
  }
  
  function buscar() {
    let dni = parseInt(prompt("Ingrese el DNI del pasajero que desea consultar"));
    let busqueda = pasajeros.filter((item) => item.dni === dni);
    let mensaje = "";
    busqueda.forEach((item) => {
      mensaje += `
      ID: ${item.id}
      TERMINAL DE ORIGEN: ${item.origen}
      TERMINAL DE DESTINO: ${item.destino}
      DNI: ${item.dni}
      NOMBRE Y APELLIDO: ${item.nombrePasajero}
      Precio: $${item.precio}
    `;
    });
  
    alert(mensaje);
  }
  
  alert("INICIO DEL PROCESO DE AGREGADO DE STOCK");
  
  let decisionStock = prompt(
    "desea agregar o seguir agregando colectivos? si o no"
  ).toLowerCase();
  while (decisionStock != "no" && decisionStock != "si") {
    alert("por favor ingresa si o no");
  }
  
  if (decisionStock == "si") {
    agregarColectivo();
  } else if (decisionStock == "no") {
    alert("HA FINALIZADO EL PROCESO DE AGREGADO DE STOCK");
  }
  
  let decision = prompt("desea comprar algun pasaje? si o no").toLowerCase();
  let precio = console.log();
  
  while (decision != "no" && decision != "si") {
    alert("por favor ingresa si o no");
    decision = prompt("desea comprar algun pasaje? si o no").toLowerCase();
  }
  
  if (decision == "si") {
    let colectivosAll = colectivos.map(
      (item) => `
    Viajes de los que disponemos:
    Origen: ${item.origen}
    Destino: ${item.destino}
    Preecio: $${item.precio}
    Cantidad: ${item.cantidad}
      `
    );
    alert(colectivosAll);
    comprarPasaje();
    buscar();
  } else if (decision == "no") {
    alert("Gracias por su visita!");
  }
  let decisionCompra = prompt("desea seguir comprando? si o no").toLowerCase();
  while (decisionCompra != "no" && decisionCompra != "si") {
    alert("por favor ingrese si o no");
    comprarPasaje();
    buscar();
  }
  if (decisionCompra == "si") {
    comprarPasaje();
  } else if (decisionCompra == "no") {
    alert("gracias por su visita");
  }
  
  
  