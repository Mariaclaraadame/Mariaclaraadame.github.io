var molH2 = 1;
var molO2 = 0.5;
var molH2O = 1;
function calculaReacao() {
  var H2 = document.querySelector("#H2").value;
  var O2 = document.querySelector("#O").value;

  var H2eH2O = (H2 * molH2O) / molH2;
  document.querySelector(".resposta1").innerHTML = `<p>Correlação H2-H2O</p>
  <p>1mol de H2 forma 1mol de H2O</p>
  <p><b>1° passo:</b> Mol de H2 x Mol H2O (formado) = Mol de H20 x Mol H2 (digitado)</p> 
  <p><b>2° passo:</b> Mol H2O (formado) = ${molH2O} x ${H2} / ${molH2}</p>  
  <p class="resp">A resposta é ${H2eH2O} </p>`;

  var O2eH2O = (O2 * molH2O) / molO2;
  document.querySelector(".resposta2").innerHTML = `<p>Correlação O2-H2O</p>
  <p>0,5mol de O2 forma 1mol de H2O</p>
  <p><b>1° passo:</b> Mol de O2 x Mol H2O (formado) = Mol de H20 x Mol O2 (digitado)</p> 
  <p><b>2° passo:</b> Mol H2O (formado) = ${molH2O} x ${O2} / ${molO2}</p>  
  <p class="resp">A resposta é ${O2eH2O} </p>`;

  if (H2eH2O > O2eH2O) {
    var limitante = "Oxigênio";
    var qtdLimitante = O2;
    var produto = O2eH2O;
  } else if (H2eH2O < O2eH2O) {
    var limitante = "Hidrogênio";
    var qtdLimitante = H2;
    var produto = H2eH2O;
  } else {
    var limitante = "Não possui";
    var qtdLimitante = "Não possui";
    var produto = O2eH2O;
  }
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol de H2 = ${H2} </br> Mol de O = ${O2} </br> Reagente limitante = ${limitante} </br> Quantidade do reagente limitante = ${qtdLimitante}mol </br> Quantidade do produto = ${produto}mol </p>`;
}
