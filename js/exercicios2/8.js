var minusculas = /[a-z]/;
var maiusculas = /[A-Z]/;
var numeros = /[1-9]/;
var especiais = /[@#!$%&*()-+.,=]/;
$(function () {
  $("#indica").click(function () {
    var data1 = $("#data1").val();
    var data2 = $("#data2").val();
    if (data1 == "" || data2 == 0) {
      $("#semanas").text("Tente novamente!");
    } else {
      var ano1 = data1.substr(0, 4);
      var mes1 = data1.substr(5, 2);
      var dia1 = data1.substr(8, 2);
      var ano2 = data2.substr(0, 4);
      var mes2 = data2.substr(5, 2);
      var dia2 = data2.substr(8, 2);
      const now = new Date(ano1, mes1 - 1, dia1);
      const past = new Date(ano2, mes2 - 1, dia2);
      const diff = Math.abs(now.getTime() - past.getTime());
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
      $("#semanas").text(
        "A distância entre " +
          dia1 +
          "/" +
          mes1 +
          "/" +
          ano1 +
          " e " +
          dia2 +
          "/" +
          mes2 +
          "/" +
          ano2 +
          " é de " +
          days +
          " semanas"
      );
      $("#data1").val("");
      $("#data2").val("");
    }
  });
});
