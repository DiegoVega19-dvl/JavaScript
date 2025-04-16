let pokemones = ["pikachu", "charmander", "snorlax", "charizard"];

let habilidades = [
  [75, 85, 90], // pikachu
  [39, 52, 43], // charmander
  [98, 100, 76], // snorlax
  [80, 92, 78], // charizard
];

function calcularHabilidades(habilidades) {
  let promedios = [];

  for (let i = 0; i < habilidades.length; i++) {
    let fila = habilidades[i];
    let suma = fila.reduce((total, habilidad) => total + habilidad, 0);
    promedios[i] = suma / fila.length;
  }
  return promedios;
}

function aptitud(pokemones, promedios) {
  for (let i = 0; i < promedios.length; i++) {
    if (promedios[i] >= 70) {
      console.log(
        `${pokemones[i]} es un Pokémon apto. tiene un promedio de:  ${promedios[i]}`
      );
    } else {
      console.log(
        `${pokemones[i]} no es un pokemon apto. tiene un promedio de:  ${promedios[i]}`
      );
    }
  }
}

let promedios = calcularHabilidades(habilidades);
aptitud(pokemones, promedios);
