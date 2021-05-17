$(function () {
  $("#executa").click(function () {
    let numero1 = $("#numero1").val();
    let numero2 = $("#numero2").val();
    let operacao = $("#operacao").val();
    $("#resultado").text(
      "Resultado = " + calculadora(numero1, numero2, operacao)
    );
  });
  function calculadora(n1, n2, op) {
    numero1 = parseFloat(n1);
    numero2 = parseFloat(n2);
    switch (op) {
      case "Soma":
        return numero1 + numero2;
        break;
      case "Subtração":
        return numero1 - numero2;
        break;
      case "Multiplicação":
        return numero1 * numero2;
        break;
      case "Divisão":
        return numero1 / numero2;
        break;
    }
  }
});
