var edad = 17;

if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

// problemas con var

const pi = 3.1416;

const iva = 0.16;

function ejemplo() {
  for (var i = 0; i < 3; i++) {
    // Código dentro del ciclo
  }
  // 3, debido al alcance de función de `var`
  console.log(i);
}

ejemplo();

// basicamente si una variable esta declarada con let, no se puede acceder a ella si no esta declarada dentro del mismo bloque o se intenta acceder a ella antes de su inicisializacion

// la diferencia principal entre usar la var y let en la declaracion de variables, es el alcance.
// var es de alcance global si se declara fuera de una funcion, pero se declara dentro de una funcion
// esta solo sera disponible dentro de esa funcion, por ejemplo:

var foo = "hola";

function scope() {
  let saludo = "como estas";
  console.log(foo);
}

scope();

console.log(foo);

// ahora con let, actualmente es el preferible para la declaracion de la variables, particularmente dentro de bloques de codigo, por ejemplo:

function saludar() {
  let hola = "variable declarada con let";
  console.log(hola);
}

saludar();

//console.log(hola); // te saldra en consola que la variable hola no esta definida
// aunque si lo este dentro de la funcion saludar.

if (true) {
  var ejemploVar = "hola desde var";
}

console.log(ejemploVar);

// hositing en javascript

console.log(hoisting); // esto te da como resultado Undefined, no importa que se halla declarado la varible despues de esto
var hoisting = "esto es una prueba de hoisting";

var edad = prompt("ingresa tu edad: ");
var edadInt = Number(edad);

if (edadInt >= 18) {
  alert("puedes entrar al bar");
} else {
  alert("no puedes entrar al bar");
}
