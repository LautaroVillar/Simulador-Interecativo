//Simulador de tienda de botines
function SolicitarNombre() {
    alert("Bienvenido a la tienda de botines");
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
      nombre = prompt("Ingrese su nombre");
    }
    return nombre;
}
SolicitarNombre();

let ingreso = prompt(
  "Selecciona una marca \n 1-Puma \n 2-Nike \n 3-Adidas \n 4-Umbro");
    switch (ingreso) {
      case "1":
        alert("Seleccionaste puma");
        break;
      case "2":
        alert("Seleccionaste Nike");
        break;
      case "3":
        alert("Seleccionaste Adidas");
        break;
      case "4":
        alert("Seleccionaste Umbro");
        break;
      default:
        alert("Opción no válida");
        break;
}

function elegirTalle () {
  let talle = parseInt(prompt("Elegir talle, solo hay disponibles del 39 a 45"));
  if (talle >45||talle<39)
  alert("No hay talle disponible, disculpe las molestias");
  else {
    alert("Hay stock, selecciono talle " + talle +  ", que lo disfrute");

  }
}

elegirTalle ();

const productos = [{ id:1, producto: "Puma", precio: "precio del producto " + 15000},
                  { id:2, producto: "Nike", precio: "precio del producto " + 18000},
                  { id:3, producto: "Adidas",precio: "precio del producto " + 19000},
                  { id:4, producto: "Umbro", precio: "precio del producto " + 11000}
];

for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.producto);
  console.log(producto.precio);
}