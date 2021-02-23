function ocorrencia(obj, palavra) {
  return obj.filter((v) => v === palavra).length;
}
$(function () {
  $("#limpa").click(function () {
    $("#tabela").empty();
    $("#texto").val("");
  });
  $("#indica").click(function () {
    $("#tabela").empty();
    var texto = $("#texto").val();
    var palavras = texto.split(" ").map(function (palavra) {
      return palavra.toLocaleLowerCase();
    });
    var i = 0;
    var array = [];
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
    for (i = 0; i < teste.length; i++) {
      var linha = $("<tr>");
      $("#tabela").append(linha);
      var celula1 = $("<td>");
      var celula2 = $("<td>");
      celula1.text(teste[i]);
      celula2.text(array[i]);
      linha.append(celula1);
      linha.append(celula2);
    }
  });
});
