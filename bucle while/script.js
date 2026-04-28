// ejercicio 1

/*let contador, numero, lista;

numero = prompt("ingresa un numero entero: ");
contador = 0;
lista = "";
while (contador < numero) {
  lista = lista + contador + ",";
  contador++;
}

lista = lista + contador;
alert(lista);*/

// ejercicio 2

/*let numero = 0;
while (numero < 1 || numero > 5) {
  numero = parseInt(prompt("Teclee un número entre 1 y 5"));
}*/

// ejercicio 3

/*let letra = "";

while (letra != "n" && letra != "N") {
  letra = prompt("ingresa una letra");
}

alert("programa finalizado");*/

// ejercicio 4

/*let numero,
  resto,
  divisor = 2,
  esPrimo = " Si";
numero = parseInt(prompt("Teclear un numero entero"));
while (divisor <= numero && numero % divisor != 0) {
  divisor++;
}
if (divisor < numero) {
  esPrimo = " NO ";
}
console.log("El numero " + numero + esPrimo + " es primo");

let numero = parseInt(prompt("ingresa un numero: "));
let comparacion = numero % 2 === 0 ? numero + " es par " : numero + " es impar";
alert(comparacion);*/

// ejercicio 5

/*const pass = "holaMundo";
let intentos = 0;

while (intentos < 3) {
  let contraseña = prompt("ingresa la contraseña: ");
  if (contraseña == pass) {
    prompt("acceso concedido");
    intentos += 3;
    break;
  } else {
    prompt("acceso denegado!!!");
    intentos++;
  }
}
if (intentos == 3) {
  alert("alerta intruso");
}*/

let numero = 1;
let suma = 0;

while (numero != 0) {
  numero = parseInt(prompt("ingrese un numero"));
  suma = suma + numero;
}

alert("la suma de todos los numeros es: " + suma);
