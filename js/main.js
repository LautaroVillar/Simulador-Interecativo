//Simulador de tienda de botines
function SolicitarNombre() {
    alert("Bienvenido a la tienda de botines");
    let nombre = prompt("Ingrese su nombre")
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
        alert("Seleccionaste Puma");
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

let talle = i = 39; i <= 45; i++;
function elegirTalle () {
  let talle = parseInt(prompt("Elegir talle, solo hay disponibles del 39 a 45"));
  if (talle > 45 )
  alert("No hay talle disponible, disculpe las molestias");
  else {
    alert("Hay stock, selecciono talle " + talle +  ", que lo disfrute");

  }
}

elegirTalle ();
