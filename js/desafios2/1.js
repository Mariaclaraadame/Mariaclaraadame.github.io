$(function () {
  let acervoArray = new Array();
  function criaTabela(titulo, desc, genero, autor) {
    $("#acervo").append(
      $("<tr>")
        .append($("<td>").text(titulo))
        .append($("<td>").text(desc))
        .append($("<td>").text(genero))
        .append($("<td>").text(autor))
        .append(
          $("<td>").append($("<img>").attr("src", "../../imagens/lixeira.png"))
        )
    );
  }

  function salvaValoresNoInput() {
    $("input[name=acervo_post]").val(JSON.stringify(acervoArray));
    $("#titulo").val("");
    $("#descricao").val("");
    $("#genero").val("");
    $("#autor").val("");
  }

  function apagaTabela(lixeiraClicada) {
    $(lixeiraClicada).parents("#acervo tr").remove();
  }

  function apagaElementoDoObjeto(lixeiraClicada) {
    const arrayDeTd = $(lixeiraClicada).parents("tr").find("td").html();
    const elementoExcluido = {
      titulo: $(arrayDeTd[0]),
      descricao: $(arrayDeTd[1]),
      genero: $(arrayDeTd[2]),
      autor: $(arrayDeTd[3]),
    };

    acervoArray.map((obj, index) => {
      if (JSON.stringify(obj) === JSON.stringify(elementoExcluido)) {
        acervoArray.splice(index, 1);
      }
    });
  }

  $("#botao").click(function () {
    let tituloLivro = $("#titulo").val();
    let descricaoDoLivro = $("#descricao").val();
    let generoDoLivro = $("#genero").val();
    let autorDoLivro = $("#autor").val();
    criaTabela(tituloLivro, descricaoDoLivro, generoDoLivro, autorDoLivro);

    var livro = {
      titulo: tituloLivro,
      descricao: descricaoDoLivro,
      genero: generoDoLivro,
      autor: autorDoLivro,
    };
    acervoArray.push(livro);

    salvaValoresNoInput();
  });

  $("#acervo").on("click", "img", function () {
    const lixeiraClicada = this;
    apagaTabela(lixeiraClicada);
    apagaElementoDoObjeto(lixeiraClicada);
    salvaValoresNoInput();
  });
});
