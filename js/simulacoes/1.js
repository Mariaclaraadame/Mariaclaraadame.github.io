function calculaMolparaMassa() {
  var mol = document.querySelector("#mol").value;
  var massaMolar = 24.305;
  var massa = mol * massaMolar;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Mol=Massa/Massa molar</p> 
                 <p><b>2° passo:</b> ${mol}=Massa/${massaMolar}</p> 
                 <p><b>3° passo:</b> Massa=${massaMolar}x${mol}</p> 
                 <p class="resp">A resposta é ${massa} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol=${mol} </br> Massa=? </br> Massa Molar=24.305</p>`;
}
function calculaMassaparaMol() {
  var massa = document.querySelector("#massa").value;
  var massaMolar = 24.305;
  var mol = massa / massaMolar;
  document.querySelector(
    ".resposta"
  ).innerHTML = `<p><b>1° passo:</b> Mol=Massa/Massa molar</p> 
                 <p><b>2° passo:</b> Mol=${massa}/${massaMolar}</p> 
                 <p class="resp">A resposta é ${mol} </p>`;
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol=? </br> Massa=${massa} </br> Massa Molar=24.305</p>`;
}
function transferencia(e1, e2) {
  document.querySelector(".resposta").innerHTML = "Calculando...";
  document.querySelector(
    ".data"
  ).innerHTML = `<p class="data"><b>Dados:</b> </br> Mol=? </br> Massa=? </br> Massa Molar=24.305</p>`;
  document.querySelector(e1).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e1).parentNode.parentNode.classList.toggle("ativo");
  document.querySelector(e2).parentNode.parentNode.classList.toggle("desativo");
  document.querySelector("#mol").value = "";
  document.querySelector("#massa").value = "";
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
