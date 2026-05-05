/*function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("el parametro no es un numero");
  }
}

try {
  getRectArea(2, 2);
} catch (e) {
  console.error(e);
}*/

function suma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error(alert("ingresa solo numeros"));
  } else {
    return a + b;
  }
}

try {
  alert("suma dos numeros");
  let a = Number(prompt("ingresa un numero"));
  let b = Number(prompt("ingresa otro numero"));
  alert("la suma es: " + suma(a, b));
} catch (e) {
  console.error(e);
} finally {
}
