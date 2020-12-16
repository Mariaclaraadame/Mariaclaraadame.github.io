function geraQuadrado() {
  var quadrado = document.createElement("div");
  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.backgroundColor = "red";
  quadrado.style.margin = "10px 0px";
  document.querySelector(".resultado").appendChild(quadrado);
}
