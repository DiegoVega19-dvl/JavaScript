var planeta = prompt("ingresa el nombre de algun planeta del sistema solar : ");

var planeta = planeta.toLowerCase();
//console.log(planeta);

const tierra = [
  "tiene un satelite natural llamado luna",
  "tarda 24 horas en dar una vuelta completa sobre su eje",
  "y tarda alrededor de 365 dias en dar una vuelta completo al sol",
];

switch (planeta) {
  case "mercurio":
    console.log("mercurio es el primer planeta del sistema solar");
    break;
  case "venus":
    console.log("venus es el segundo planeta del sistema solar");
    break;
  case "tierra":
    console.log("tierra es tercer planeta del sistema solar");
    console.log(tierra);
    break;
  case "marte":
    console.log("marte es el cuarto planeta del sistema solar");
    break;
  case "jupiter":
    console.log("jupiter es el quinto planeta del sistema solar");
    break;
  case "saturno":
    console.log("saturno es el sexto planeta del sistema solar");
    break;
  case "urano":
    console.log("urano es el septimo planeta del sistema solar");
    break;
  case "neptuno":
    console.log("neptuno es el octavo planeta del sistema solar");
    break;
  default:
    console.log("ese no es un planta del sistema solar");
}
