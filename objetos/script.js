/* a diferencia de los arreglos, los objetos si pueden tener diferentes tipos de datos,
los objetos usan el formato clave -> valor */

const persona = {
  nombre: "Diego",
  edad: 24,
  comidaFavorita: "spagueti",
};

//para acceder a la propiedad de un objeto se usa la sintaxis de punto

let comida = persona.comidaFavorita;
console.log(comida);

for (let key in persona) {
  console.log(key, persona[key]);
}

var videoJuego = {
  nombre: "Minecraft",
  plataforma: "Xbox, PS5, PC, Switch",
  fechaLanzamiento: "18/11/11",
};

console.log(typeof videoJuego);
console.log(videoJuego);

var realese = videoJuego.fechaLanzamiento;
console.log(realese);

var planeta = new Object();

planeta = {
  nombre: "tierra",
  tipo: "rocoso",
  timpoRotacion: 24,
};

console.log(planeta.nombre);