var molOxigenio = 0.5;
var volumeH2 = 22.4;
function calculaMolparaVolume() {
  var mol = document.querySelector("#mol").value;
  var volume = (mol * volumeH2) / molOxigenio;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Volume x Mol do Oxigênio = Mol x Volume do H2</p> 
                   <p><b>2° passo:</b> Volume x ${molOxigenio} = ${mol} x ${volumeH2}</p> 
                   <p><b>3° passo:</b> Volume = ${mol} x ${volumeH2} / ${molOxigenio}</p> 
                   <p class="resp">A resposta é ${volume} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol = ${mol}mol </br> Volume = ? </br> Mol do Oxigênio = ${molOxigenio}mol </br> Volume do H2 = ${volumeH2}L </p>`;
}
function calculaVolumeparaMol() {
  var volume = document.querySelector("#volume").value;
  var mol = (volume * molOxigenio) / volumeH2;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Mol x VolumeH2 = Mol do Oxigênio x Volume</p> 
                   <p><b>2° passo:</b> Mol x ${volumeH2} = ${molOxigenio} x ${volume}</p>
                   <p><b>3° passo:</b> Mol = ${molOxigenio} x ${volume} / ${volumeH2}</p> 
                   <p class="resp">A resposta é ${mol} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol = ? </br> Volume = ${volume} </br> Mol do Oxigênio = ${molOxigenio}mol </br> Volume do H2 = ${volumeH2}L </p>`;
}
function transferencia(e1, e2) {
  document.querySelector(".resposta").innerHTML = "Calculando...";
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol = ? </br> Volume = ? </br> Mol do Oxigênio = ${molOxigenio}mol </br> Volume do H2 = ${volumeH2}L </p>`;
  document.querySelector(e1).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e1).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector("#mol").value = "";
  document.querySelector("#volume").value = "";
}
document
  .querySelector(".seta-transferencia1")
  .addEventListener("click", function () {
    transferencia(".seta-transferencia1", ".seta-transferencia2");
  });
document
  .querySelector(".seta-transferencia2")
  .addEventListener("click", function () {
    transferencia(".seta-transferencia2", ".seta-transferencia1");
  });
