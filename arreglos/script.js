/*let miVector = [1, 2, 3, 4, 5];

console.log(miVector[2]);

let miMatriz = [
  [1, 3, 4],
  [7, 3, 1],
  [3, 4, 2],
];

console.log(miMatriz[2][2]);*/

/*let Vector = new Array(3);

Vector[0] = "manzana";
Vector[1] = "platano";
Vector[2] = "piña";

console.log(Vector[2]);*/

/*let matriz = new Array(3);

for(let i = 0; i < 3; i++){
    matriz[i] = new Array(3);
}

console.log(matriz);*/

/*let frutas = ["manzana", "platano", "piña", "naranja"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}*/

let frutas = [
  ["manzana", "platano", "piña", "naranja"],
  ["pera", "uva", "melon", "kiwi"],
  ["banana", "mango", "papaya", "guanabana"],
];

for(let i = 0; i < frutas.length; i++){
    for(let j = 0; j < frutas[i].length; j++){
        console.log(frutas[i][j]);
    }
}
