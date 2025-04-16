var num1 = prompt("Ingrese un numero número:");
var num2 = prompt("Ingrese un segundo numero:");

var resta = num1 - num2;

if (resta > 0) {
  console.log("El resultado de la resta es mayor que 0.");
  if (resta % 2 == 0) {
    console.log("El resultado es par.");
  } else {
    console.log("El resultado es impar.");
  }
} else {
  console.log("El resultado de la resta es menor que 0.");
}
    