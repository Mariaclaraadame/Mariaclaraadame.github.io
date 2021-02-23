var minusculas = /[a-z]/;
var maiusculas = /[A-Z]/;
var numros = /[1-9]/;
var especiais = /[@#!$%&*()-+.,=]/;
$(function () {
  $("#substitui").click(function () {
    if ($("#texto").val() != "") {
      var procurar = $("#frase1").val();
      var substituir = $("#frase2").val();
      var texto = $("#texto").val();
      var palavras = texto.split(" ");
      for (i = 0; i < palavras.length; i++) {
        if (palavras[i] == procurar) {
          palavras[i] = substituir;
        }
      }
      var teste = "";
      teste = palavras.join(" ");
      $("#texto_substituido").text(teste);
      $("#frase1").val("");
      $("#frase2").val("");
      $("#texto").val("");
    } else {
      $("#texto_substituido").text("Tente novamente!");
    }
  });
});
