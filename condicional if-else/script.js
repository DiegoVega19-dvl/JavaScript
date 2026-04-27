var aprobe = true;

if (aprobe == true) {
  console.log("El alumno aprueba el curso.");
} else {
  console.log("El alumno no aprueba el curso.");
}

// coaercion de tipo debil
if (5 == "5") {
  console.log("es igual");
} else {
  console.log("no es igual");
}

// coercion de tipo estricta
if (5 === "5") {
  console.log("es igual");
} else {
  console.log("no es igual");
}

// por buena practica es recomendable usar siempre ===, para evitar problemas
