function pares(x, y) {
  var pares = [];
  for (i = x; i <= y; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  return pares.toString();
}
var result = pares(1, 1200);
var resultado_array = result.split(",");
resultado_array.forEach(function (numero) {
  var elemento_li = document.createElement("LI");
  elemento_li.innerHTML = numero;
  document.getElementById("lista").appendChild(elemento_li);
});
