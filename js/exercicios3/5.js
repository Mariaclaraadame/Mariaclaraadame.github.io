$(function () {
  $("#executa").click(function () {
    let salario = $("#salario").val();
    $("#resultado").text(
      "O imposto de renda é de " + imposto(salario) + " reais."
    );
  });
  function imposto(sal) {
    salario = parseFloat(sal);
    if (salario <= 1903.99) {
      return "0";
    }
    if (salario > 1903.99 && salario <= 2826.65) {
      return salario * 0.075 - 142.8;
    }
    if (salario > 2826.65 && salario <= 3751.05) {
      return salario * 0.15 - 354.8;
    }
    if (salario > 3751.05 && salario <= 4664.68) {
      return salario * 0.225 - 636.13;
    }
    if (salario > 4664.68) {
      return salario * 0.275 - 869.36;
    }
  }
});
