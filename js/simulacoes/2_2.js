var massaOxigenio = 16;
var volumeCNTP = 22.4;
function calculaMassaparaVolume() {
  var massa = document.querySelector("#massa").value;
  var volume = (volumeCNTP * massa) / massaOxigenio;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Volume x Massa do Oxigênio = VolumeCNTP x Massa</p> 
                   <p><b>2° passo:</b> Volume x ${massaOxigenio} = ${volumeCNTP} x ${massa}</p> 
                   <p><b>3° passo:</b> Volume = ${volumeCNTP} x ${massa} / ${massaOxigenio}</p> 
                   <p class="resp">A resposta é ${volume} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Massa = ${massa}g </br> Volume = ? </br> Massa do Oxigênio = ${massaOxigenio}g </br> VolumeCNTP = ${volumeCNTP}L </p>`;
}
function calculaVolumeparaMassa() {
  var volume = document.querySelector("#volume").value;
  var massa = (volume * massaOxigenio) / volumeCNTP;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Massa x VolumeCNTP = Massa do Oxigênio x Volume</p> 
                   <p><b>2° passo:</b> Massa x ${volumeCNTP}= ${massaOxigenio} x ${volume}</p>
                   <p><b>3° passo:</b> Massa = ${massaOxigenio} x ${volume} / ${volumeCNTP}</p> 
                   <p class="resp">A resposta é ${massa} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Massa = ? </br> Volume = ${volume}L </br> Massa do Oxigênio = ${massaOxigenio} </br> VolumeCNTP = ${volumeCNTP}L </p>`;
}
function transferencia(e1, e2) {
  document.querySelector(".resposta").innerHTML = "Calculando...";
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Massa = ? </br> Volume = ? </br> Massa do Oxigênio = ${massaOxigenio}g </br> VolumeCNTP = ${volumeCNTP}L </p>`;
  document.querySelector(e1).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e1).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector("#massa").value = "";
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
