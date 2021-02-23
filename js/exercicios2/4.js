function ocorrencia(palavras, palavra) {
  return palavras.filter((v) => v === palavra).length;
}
$(function () {
  $("#limpa").click(function () {
    $("#texto").val("");
    $("#texto_indicado").text("");
  });
  $("#indica").click(function () {
    var texto = $("#texto").val();
    var palavras = texto.split(" ").map(function (palavra) {
      return palavra.toLocaleLowerCase();
    });
    var i = 0;
    var array = new Array();
    var teste = [];
    var x = 0;
    for (palavra of palavras) {
      if (teste.indexOf(palavra) == -1) {
        var quantidade = ocorrencia(palavras, palavra);
        teste.push(palavra);
        array[x] = quantidade;
      } else x--;
      i++;
      x++;
    }
    var igual = [];
    var maior;
    var conta = 0;
    for (i = 0; i < teste.length; i++) {
      var maiorpalavra = Math.max.apply(null, array);
      if (array[i] == maiorpalavra) {
        conta++;
        maior = teste[i];
        igual[i] = teste[i];
      }
    }
    if (conta > 1) {
      $("#texto_indicado").text(
        igual +
          " (essas palavras tiveram a mesma ocorrência, tendo aparecido " +
          array[0] +
          " vezes). "
      );
    } else {
      $("#texto_indicado").text(
        "A palavra de maior ocorrência foi: " +
          maior +
          ", tendo aparecido " +
          maiorpalavra +
          " vezes."
      );
    }
  });
});
