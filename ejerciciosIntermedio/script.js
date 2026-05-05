// ejercicio 1: funcion declarada para sumar dos numero

function suma(a, b) {
  return a + b;
}

console.log(suma(10, 15));

// ejercicio 2 funcion anonima si un numero es par

let isEven = function (numero) {
  if (numero % 2 == 0) {
    console.log("el numero dado es par");
  } else {
    console.log("el numero dado es impar");
  }
};

console.log(isEven(7));

// ejercicio 3: Arrow function para saludar

let saludar = () => {
  console.log("hola como estas");
};

console.log(saludar());

// ejercicio 4: funcion declarada para calcular el factorial de un numero

function factorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

console.log(factorial(5));
