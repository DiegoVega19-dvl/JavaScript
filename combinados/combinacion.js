
const arrayObjetos = [
    {
        nombre: "juan",
        edad: 24,
        comidaFavorita: "pizza",
    },
    {
        nombre: "ana",
        edad: 25,
        comidaFavorita: "tacos",
    },
    {
        nombre: "pedro",
        edad: 20,
        comidaFavorita: "pozole",
    },
    {
        nombre: "karla",
        edad: 30,
        comidaFavorita: "ramen",
    },
];

for (let i = 0; i < arrayObjetos.length; i++) {
    console.log("nombre: " + arrayObjetos[i].nombre);
    console.log("edad: " + arrayObjetos[i].edad);
    console.log("comida favorita: " + arrayObjetos[i].comidaFavorita);
    console.log("-------------")
}



// arreglo con objetos

const objetoArray = {
    nombre: "objeto con array",
    arr: ["luffy", "zoro", "nami", "usopp"]
}

for (let i = 0; i < objetoArray.arr.length; i++) {
    console.log(objetoArray.arr[i] + " hola")
}