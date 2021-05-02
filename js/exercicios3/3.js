$(function () {
  $("#executa").click(function () {
    let array = $("#array").val();
    array = array.replace(/\s+/g, "");
    let array2 = array.split(",");
    let tamanho = array.length;
    if (array2[tamanho - 1] == "") {
      array2.pop();
    }
    $("#resultado").html(
      "<br>Duplicados: " +
        elemento_duplicado(array2) +
        "<br> Pares: " +
        array_par(array2) +
        "<br> Soma: " +
        soma(array2)
    );
  });
  function elemento_duplicado(vetor) {
    let x = vetor.map(function (num) {
      return num * 2;
    });
    return x;
  }
  function array_par(vetor) {
    let x = vetor.filter(function (num) {
      return num % 2 == 0;
    });
    if (x == "") {
      return "Não tem valores pares";
    } else {
      return x;
    }
  }
  function soma(vetor) {
    let x = vetor.reduce(function (soma, num) {
      return parseInt(soma) + parseInt(num);
    });
    return x;
  }
});
