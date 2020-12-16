var molOxigenio = 0.5;
var molH2 = 1;
function calculaReacao() {
  var H2 = document.querySelector("#H2").value;
  var O = document.querySelector("#O").value;
  var x = (H2 * molOxigenio) / molH2;
  if (x > O) {
    var reagenteLimitante = [H2, "H2"];
  } else if (x < O) {
    var reagenteLimitante = [O, "O"];
  } else var reagenteLimitante = [null, "Não existe reagente limitante"];
}
