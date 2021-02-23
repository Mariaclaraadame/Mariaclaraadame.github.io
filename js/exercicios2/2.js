function vogal(tx) {
  tx = tx.toUpperCase();
  if (tx == "A" || tx == "E" || tx == "I" || tx == "O" || tx == "U")
    return true;
  else return false;
}
$(function () {
  $("#marca").click(function () {
    var frase = $("#frase").val();
    var resultado = "";
    for (i = 0; i <= frase.length - 1; i++) {
      if (vogal(frase[i])) resultado += "<strong>" + frase[i] + "</strong>";
      if (vogal(frase[i]) == 0) resultado += frase[i];
    }
    $("#frase_marcada").html(resultado);
  });
});
