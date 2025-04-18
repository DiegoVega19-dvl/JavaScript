
/* en javascript el tipo number no representa de forma segura los valores
enteros mayores que (2^53 -1) (eso es 9007199254740991) , o menor que -(2^53-1) para negativos. */ 

let numeroNormal = 1548565;
let bigInt = 1234567890123456789012345678901234567890n;
let bigInt1 = 1234567890123456789012345678901234567890n;

console.log(bigInt + bigInt1)

console.log(Number.MAX_VALUE);
console.log(BigInt.MAX_VALUE);

/* Sin la n, JavaScript intentará almacenar el número grande con la precisión limitada de los números de punto flotante,
 lo que probablemente resultará en una representación aproximada. Con la n, lo tratará como un BigInt, 
 garantizando la precisión completa. ¡Espero que esta analogía te ayude a entender la diferencia! */ 