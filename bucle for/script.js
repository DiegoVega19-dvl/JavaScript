/*for(i=1; i<=10; i++) {
    console.log("vuelta No: " + i);
}*/

// ejercicio 1
/*let numero = parseInt(prompt("¿hasta que numero quieres contar?: "));

for (i = 0; i <= numero; i++) {
  console.log(i);
}*/

// ejercicio 2

/*let numero = parseInt(prompt("¿desde que numero quieres iniciar la cuenta?: "));

for (i = numero; i >= 0; i--) {
  console.log(i);
}*/

// ejercicio 3

/*let numero = parseInt(prompt("ingrese un numero: "));

for (i = 0; i < numero; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}*/

// ejercicio 4

/*let numero = parseInt(prompt("ingrese un numero: "));

for (i = 0; i < numero; i++) {
  if (i % 3 == 2) {
    console.log(i);
  }
}*/

// ejercicio 5

/*let numero = parseInt(prompt("ingrese un numero: "));

for (i = 1; i <= 10; i++) {
  console.log(numero + " X " + i + " = " + i * numero);
}*/

//ejercicio 6

/*var letra = prompt("teclee una letra: ");
var numero = parseInt(prompt("ingrese un numero: "));
var cadena = "";

for (i = 0; i < numero; i++) {
  cadena += letra;
}

console.log(cadena);*/

// ejercicio 7

/*var izquierda;
var derecha;

for (izquierda = 0; izquierda < 2; izquierda++) {
  for (derecha = 0; derecha < 5; derecha++) {
    console.log(izquierda + " : " + derecha);
  }
}*/

// ejercicio 8

let alto, ancho, linea, cadena;
alto = parseInt(prompt("Teclea un número de 1 a 10"));
for (linea = 0; linea < alto; linea++) {
  cadena = "";
  for (ancho = 0; ancho <= linea; ancho++) {
    cadena += "*";
  }
  console.log(cadena + "\n");
}
