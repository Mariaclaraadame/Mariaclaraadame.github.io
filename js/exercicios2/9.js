var minusculas = /[a-z]/;
var maiusculas = /[A-Z]/;
var numeros = /[1-9]/;
var especiais = /[@#!$%&*()-+.,=]/;
$(function () {
  $("#senha").keyup(function () {
    if ($("#senha").val() == "") {
      $("#classificacao").text("");
      $("#classificacao").css("color", "black");
    }
  });
  $("#classifica").click(function () {
    var senha = $("#senha").val();
    var resultado = "";
    if ($("#senha").val() == "") {
      $("#classificacao").text("Tente novamente!");
      $("#classificacao").css("color", "black");
    }
    if (minusculas.test(senha) || maiusculas.test(senha)) {
      $("#classificacao").text("Fraca");
      $("#classificacao").css("color", "red");
    }
    if (
      minusculas.test(senha) &&
      maiusculas.test(senha) &&
      numeros.test(senha)
    ) {
      $("#classificacao").text("Moderada");
      $("#classificacao").css("color", "orange");
    }
    if (
      minusculas.test(senha) &&
      maiusculas.test(senha) &&
      numeros.test(senha) &&
      especiais.test(senha)
    ) {
      $("#classificacao").text("Forte");
      $("#classificacao").css("color", "green");
    }
  });
});
