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
      "<br>Valor minimo: " +
        minimo(array2) +
        "<br> Valor máximo: " +
        maximo(array2) +
        "<br> Array sem repetição: " +
        sem_repetir(array2) +
        "<br> Array em ordem: " +
        ordem_crescente(array2)
    );
  });
  function minimo(vetor) {
    let min;
    vetor.forEach(function (num) {
      if (num == Math.min(...vetor)) {
        min = num;
      }
    });
    return min;
  }
  function maximo(vetor) {
    let max;
    vetor.forEach(function (num) {
      if (num == Math.max(...vetor)) {
        max = num;
      }
    });
    return max;
  }
  function sem_repetir(vetor) {
    let sem_repeticao = [...new Set(vetor)];
    return sem_repeticao.join(",");
  }
  function ordem_crescente(vetor) {
    return vetor.sort().join(",");
  }
});
