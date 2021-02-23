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
      var meses = "";
      switch (mes) {
        case "01":
          meses = "janeiro";
          break;
        case "02":
          meses = "fevereiro";
          break;
        case "03":
          meses = "março";
          break;
        case "04":
          meses = "abril";
          break;
        case "05":
          meses = "maio";
          break;
        case "06":
          meses = "junho";
          break;
        case "07":
          meses = "julho";
          break;
        case "08":
          meses = "agosto";
          break;
        case "09":
          meses = "setembro";
          break;
        case "10":
          meses = "outubro";
          break;
        case "11":
          meses = "novembro";
          break;
        case "12":
          meses = "dezembro";
          break;
      }
      $("#data").val("");
      $("#extenso").text(
        " A data " +
          dia +
          "/" +
          mes +
          "/" +
          ano +
          " em extenso é: " +
          dia +
          " de " +
          meses +
          " de " +
          ano
      );
    }
  });
});
