var minusculas = /[a-z]/;
var maiusculas = /[A-Z]/;
var numeros = /[1-9]/;
var especiais = /[@#!$%&*()-+.,=]/;
$(function () {
  $("#le").click(function () {
    var data = $("#data").val();
    if (data != "") {
      var ano = data.substr(0, 4);
      var mes = data.substr(5, 2);
      var dia = data.substr(8, 2);
      const agora = new Date();
      const nascimento = new Date(ano, mes - 1, dia);
      const diff = Math.abs(agora.getTime() - nascimento.getTime());
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      $("#dias").text(
        "Tendo nascido no dia " +
          dia +
          "/" +
          mes +
          "/" +
          ano +
          " tem-se " +
          days +
          " dias de vida"
      );
      $("#data").val("");
    }
  });
});
