function experiencia() {
  var anos = document.getElementById("input").value;
  var retorno = "";
  if (anos >= 0 && anos <= 1) {
    retorno = "Iniciante";
  } else if (anos > 1 && anos <= 3) {
    retorno = "Intermediário";
  } else if (anos > 3 && anos <= 6) {
    retorno = "Avançado";
  } else retorno = "Jedi Master";
  document.getElementById("msg").innerHTML = "Seu nível é " + retorno;
}
