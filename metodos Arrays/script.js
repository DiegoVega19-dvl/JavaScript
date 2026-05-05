/*let frutas = ["manzana", "platano", "melon", "sandia"];*/

// Metodo Push: sirver para añadir un nuevo elemento al final del arreglo

//frutas.push("uva");
//console.log(frutas);

// Metodo Pop: sirve para quitar el ultimo elemento del arreglo

//frutas.pop();
//console.log(frutas);

// Metodo Shift: sirve para quitar el primer elemento del arreglo

//frutas.shift();
//console.log(frutas);

// Metodo Unshift: sirve para añadir un nuevo elemento al principio del arreglo

//frutas.unshift("uva");
//console.log(frutas);

// Metodo Splice: sirve para insertar o eliminar elementos en un arreglo

//frutas.splice(1, 0, "uva", "naranja");
//console.log(frutas);

//Metodo indexOf: Devuelve el primer índice en el que un elemento aparece en el array, o -1 si no está.

//frutas.indexOf("manzana");
//console.log(frutas);

// Metodo includes: Verifica si un array contiene un elemento específico.

//let newFrutas = frutas.includes("manzana");
//console.log(newFrutas);

// array functions

// bucle forEach()

/*const letters = ["a", "b", "c", "d", "f"];

letters.forEach((element) => console.log(element));

letters.forEach((element, index) => console.log(element, index));

letters.forEach((element, index, array) => console.log(array[0]));*/

// metodo every()

/*const letters = ["aa", "bb", "cc", "dd", "f"];

const resultado = letters.some((letter) => letter.length === 1);

console.log(resultado);*/

/** every() necesita que el callback retorne un booleano, console.log siempre retorna undefined, asi que nunca se usa directamente como callback de every(), some(), filter() etc */

// map

/*const paises = ["mexico", "argentina", "chile", "peru"];

const tamañoPaises = paises.map((pais) => pais.length);

console.log(tamañoPaises);*/

// filter

/*const paises = ["peru", "portugal", "polonia", "mexico"];

const paisesConP = paises.filter((pais) => pais.startsWith("p"));

console.log(paisesConP);*/

// find()

/*const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

const busqueda = names.find((name) => name.length === 5);

console.log(busqueda);*/

/** find se detiene la busqueda en cuento encuentre el primer elemento que cumple con la condicion. esa es la principal diferencia entre find y filter */

// reduce

/*const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.reduce((first, second) => {
  return first + second;
});

console.log(resultado);*/

const letters = ["A", "B", "C"];

letters.forEach((element, index) => {
  console.log(`pos = ${index} letter = ${element}`);
});
