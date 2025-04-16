function cambiarTexto() {
  let elemento = document.getElementById("parrafoID");
  console.log(elemento.innerHTML);
  elemento.innerHTML = "Texto cambiado";
  elemento.style.color = "red";
  elemento.style.fontSize = "24px";
  elemento.style.fontWeight = "bold";
  elemento.style.textDecoration = "underline";
}
