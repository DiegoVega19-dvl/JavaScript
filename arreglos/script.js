let miVector = [1, 2, 3, 4, 5];

console.log(miVector[2]);

let miMatriz = [
  [1, 3, 4],
  [7, 3, 1],
  [3, 4, 2],
];

console.log(miMatriz[2][2]);

let Vector = new Array(3);

Vector[0] = "manzana";
Vector[1] = "platano";
Vector[2] = "piña";

console.log(Vector[2]);

let matriz = new Array(3);

for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(3);
}

console.log(matriz);

let fruta = ["manzana", "platano", "piña", "naranja"];

for (let i = 0; i < fruta.length; i++) {
  console.log(fruta[i]);
}

let frutas = [
  ["manzana", "platano", "piña", "naranja"],
  ["pera", "uva", "melon", "kiwi"],
  ["banana", "mango", "papaya", "guanabana"],
];

for (let i = 0; i < frutas.length; i++) {
  for (let j = 0; j < frutas[i].length; j++) {
    console.log(frutas[i][j]);
  }
}

const miArray = ["juan", "maria", "pablo"];
//agregar un valor al principio del objeto con el metodo unshift
miArray.unshift("sandra");
//agregar un valor al final del objeto con el metodo push
miArray.push("daniel");
console.log(miArray);

const array2 = ["jose", "karla", "ramiro"];
// el metodo pop quita el ultimo valor del array
let newArray2 = array2.pop();
console.log(newArray2);

var planetas = ["venus", "tierra", "marte", "urano", "saturno"];
console.log(planetas.length);

for (let i = 0; i > planetas.length; i++) {
  console.log([i]);
}
