
function buscarNombre(nombres, buscar) {
  return nombres
    .map((nombre) => nombre.toLowerCase())
    .includes(buscar.toLowerCase());
}

let nombres = [
  "Juan",
  "Pedro",
  "Maria",
  "Luisina",
  "Ana",
  "Jose",
  "Carlos",
  "Maria",
  "Lucia",
  "Isabella",
  "Marco",
];

let buscar = prompt("busca un nombre por teclado: ");

let estaOno = buscarNombre(nombres, buscar);

if (estaOno) {
  console.log("El nombre está en la lista.");
} else {
  console.log("El nombre no está en la lista.");
}
