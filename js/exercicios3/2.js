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
      "<br>Sequência de fibonacci de " + array + " números: " + fibonacci(array)
    );
  });
  function fibonacci(z) {
    let array2 = new Array();
    array2.push(0);
    let a = 0;
    let b = 1;
    let f = 1;
    for (let i = 0; i < z - 1; i++) {
      array2.push(f);
      f = a + b;
      a = b;
      b = f;
    }
    return array2.join(",");
  }
});
