var edad = 17;

if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

// problemas con var



function ejemplo() {
  for (var i = 0; i < 3; i++) {
    // Código dentro del ciclo
  }
  // 3, debido al alcance de función de `var`
  console.log(i);
}

ejemplo();

// basicamente si una variable esta declarada con let, no se puede acceder a ella si no esta declarada dentro del mismo bloque o se intenta acceder a ella antes de su inicisializacion 


