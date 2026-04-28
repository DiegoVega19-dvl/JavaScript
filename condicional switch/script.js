/*var color = prompt("Ingrese un color");

switch (color) {
  case "rojo":
    console.log("es rojo");
    break;
  case "verde":
    console.log("es verde");
    break;
  case "azul":
    console.log("es azul");
    break;
  default:
    console.log("El color ingresado no es válido");
    break;
}*/

let operacion = prompt(
  "selecciona una: 1.-suma 2.-resta 3.- multiplicacion 4.- division",
);

switch (operacion) {
  case "1":
    let sum = prompt("ingresa un numero: ");
    let sum2 = prompt("ingresa otro numero: ");
    let suma = Number(sum);
    let suma2 = Number(sum2);
    let resultadoSum = suma + suma2;
    alert("el resultado de la suma de los numeros es: " + resultadoSum);
    break;
  case "2":
    let res = prompt("ingresa un numero: ");
    let res2 = prompt("ingresa otro numero: ");
    let resta = Number(res);
    let resta2 = Number(res2);
    let resultadoRes = resta - resta2;
    alert("el resultado de la resta de los numeros es: " + resultadoRes);
    break;
  case "3":
    let mul = prompt("ingresa un numero: ");
    let mul2 = prompt("ingresa otro numero: ");
    let multi = Number(mul);
    let multi2 = Number(mul2);
    let multiplicacion = multi * multi2;
    alert(
      "el resultado de la multiplicacion de los numeros es: " + multiplicacion,
    );
    break;
  case "4":
    let div = prompt("ingresa un numero: ");
    let div2 = prompt("ingresa otro numero: ");
    let divi = Number(div);
    let divi2 = Number(div2);
    let division = divi / divi2;
    alert("el resultado de la resta de los numeros es: " + division);
    break;
  default:
    alert("ingresa un numero compatible!!");
}
