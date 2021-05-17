$(function () {
  $("#executa").click(function () {
    let lado1 = $("#lado1").val();
    let lado2 = $("#lado2").val();
    let lado3 = $("#lado3").val();
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      $("#resultado").text("Valores inválidos!");
    } else {
      $("#resultado").text(triangulo(lado1, lado2, lado3));
    }
  });
  function triangulo(l1, l2, l3) {
    lado1 = parseFloat(l1);
    lado2 = parseFloat(l2);
    lado3 = parseFloat(l3);
    if (condicao_existencia(lado1, lado2, lado3) == true) {
      return classificação(lado1, lado2, lado3);
    } else {
      return "Esses valores não formam um triângulo.";
    }
  }
  function modulo(val) {
    if (val < 0) {
      val = val * -1;
    }
    return val;
  }
  function condicao_existencia(lado1, lado2, lado3) {
    if (
      (modulo(lado2 - lado3) < lado1 && lado1 < lado2 + lado3) ||
      (modulo(lado1 - lado3) < lado2 && lado2 < lado1 + lado3) ||
      (modulo(lado1 - lado2) < lado3 && lado3 < lado1 + lado2)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function classificação(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
      return "Esses valores formam um triângulo equilátero.";
    }
    if (
      (lado1 == lado2 && lado1 != lado3) ||
      (lado2 == lado3 && lado2 != lado1) ||
      (lado3 == lado1 && lado3 != lado2)
    ) {
      return "Esses valores formam um triângulo isóceles.";
    }
    if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
      return "Esses valores formam um triângulo escaleno.";
    }
  }
});
