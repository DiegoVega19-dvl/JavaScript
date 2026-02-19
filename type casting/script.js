//en javascript existen dos tipos de conversiones, la implicita y la explicita

/*la implicita es cuando javascript hace la conversion automaticamente de un valor de un tipo a otro
mientras que la conversion explicita es cuando el desarrollador usando funciones o metodos hace la conversion */

// ejemplo de conversion explicita
let numero = "123";
console.log(typeof numero);

let conversion = Number(numero);
console.log(typeof conversion);

let estado = "si";
console.log(typeof estado);

let estadoBool = Boolean(estado);
console.log(estadoBool);

// ejemplo de conversion implicita
console.log(10 + "10"); // imprime 1010 y no 20
