/*function saludar() {
  console.log("Hola mundo!");
}
saludar();*/

/*function suma(num1, num2) {
  let resultado;

  resultado = num1 + num2;

  return resultado;
}

let sumar = suma(1, 2);
console.log("el resultado de la suma es: " + sumar);

sumar = suma(10, 2);
console.log("el resultado de la suma es: " + sumar);*/

// funciones con parametros

/*function suma(num, num2) {
  return num + num2;
}*/

//console.log(suma(1, 2));

// funciones rest (con parametros indefinidos)

/*function multiplicacion(...args) {
  let total = 1;
  for (let a of args) {
    total *= a;
  }
  return total;
}

console.log(multiplicacion(2, 2, 2, 4));*/

// funciones flecha

/*let suma = (a, b) => a + b;

console.log(suma(1, 2));*/

/*function suma(a, b) {
  return a + b;
}*/

/*let multiplicacion = (...args) => {
  let res = 1;
  for (let a of args) {
    res *= a;
  }
  return res;
};

console.log(multiplicacion(1, 2, 3, 4, 5, 6));*/

/*let suma = (a, b) => a + b;
console.log(suma(1, 2));*/

// funciones IIFE ------------------------------------------------->

/*(() => {
  console.log("hola");
})();*/

// funciones de orden superior -------------------------->

// filtrar numeros impares

/*function filterOdd(numeros) {
  const filtro = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      filtro.push(numeros[i]);
    }
  }
  return filtro;
}

console.log(filterOdd(numeros));*/

// funcion de orden superior

// funcion de orden superior
/*function filtrarNumeros(numeros, isMayorQueCinco) {
  const filtroArr = [];
  for (let i = 0; i < numeros.length; i++) {
    isMayorQueCinco(numeros[i]) ? filtroArr.push(numeros[i]) : null;
  }
  return filtroArr;
}

console.log(filtrarNumeros(numeros, isMayorQueCinco));*/

// funcion prototipada

// callback
function isEven(x) {
  return x % 2 === 0;
}

// callback
function isOdd(x) {
  return x % 2 != 0;
}

// callback
function esMayorQueCinco(x) {
  return x > 5;
}

// polyfills
/*Array.prototype.filtrarNumeros = function (callback) {
  const filtroArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filtroArr.push(this[i]) : null;
  }
  return filtroArr;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(numeros.filtrarNumeros(esMayorQueCinco));
console.log(numeros.filtrarNumeros(isOdd));
console.log(numeros.filtrarNumeros(isEven));
console.log(numeros.filter(isEven));*/

const numeros = [1, 2, 1, 2, 1, 2, 1, 2];

const filtro = numeros.filter((numero) => numero.l);
