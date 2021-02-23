$(function () {
  $("#inverte").click(function () {
    var frase = $("#frase").val();
    var resultado = "";
    if (frase != "") {
      for (i = frase.length - 1; i >= 0; i--) {
        resultado += frase[i];
      }
    }
    $("#frase_invertida").text(resultado);
  });
});
