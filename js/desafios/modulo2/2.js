function geraQuadrado() {
  var quadrado = document.createElement("div");
  quadrado.classList.add("quadrado");
  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.backgroundColor = "red";
  quadrado.style.margin = "10px 0px";
  document.querySelector(".resultado").appendChild(quadrado);
  document
    .querySelector(".quadrado")
    .addEventListener("mouseover", function () {
      mudaCorQuadrado(quadrado);
    });
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function mudaCorQuadrado(quadrado) {
  var newColor = getRandomColor();
  quadrado.style.backgroundColor = newColor;
}
