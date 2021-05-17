$(function () {
  $("#executa").click(function () {
    let sequencia = $("#sequencia").val();
    let rotacoes = $("#rotacoes").val();
    rotacoes = parseInt(rotacoes);
    $("#resultado").text(cifra_rotacao(sequencia, rotacoes));
  });
  function cifra_rotacao(sequencia, rotacoes) {
    let array_sequencia = sequencia.split("");
    let array_alfabeto = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let tamanho_sequencia = array_sequencia.length;
    let tamanho_alfabeto = array_alfabeto.length;
    let i = 0;
    let x = 0;
    let a;
    let aux;
    while (x < tamanho_sequencia) {
      aux = array_sequencia[x];
      while (i < tamanho_alfabeto) {
        if (array_alfabeto[i] == aux) {
          if (i + rotacoes > tamanho_alfabeto) {
            a = i + rotacoes - tamanho_alfabeto;
            array_sequencia[x] = array_alfabeto[a];
          } else if (i + rotacoes == tamanho_alfabeto) {
            array_sequencia[x] = array_alfabeto[0];
          } else {
            array_sequencia[x] = array_alfabeto[i + rotacoes];
          }
        }
        i++;
      }
      i = 0;
      x++;
    }
    let string = array_sequencia.join("");
    return string;
  }
});
