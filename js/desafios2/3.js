$(function () {
  let link = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
  $.get(link, function (data) {
    console.log(data);
    $.each(data, function (index, filme) {
      let $catalogo = $("<div>").addClass("catalogo");
      let $figura = $("<img>").attr("src", filme.figura).addClass("figura");
      let $titulo = $("<h1>").text(filme.titulo).addClass("titulo");
      let $genero = $("<p>").text(filme.generos.join(", ")).addClass("generos");
      let estrela = filme.opinioes[0].rating;
      let $sinopse = $("<h4>").text(filme.resumo).addClass("sinopse");
      let $elenco = $("<p>")
        .text("Elenco: " + filme.elenco.join(", "))
        .addClass("elenco");
      let $semelhantes = $("<p>").text("Títulos Semelhantes:").addClass("ts");
      switch (estrela) {
        case 4:
          {
            $estrela = $("<img>")
              .attr("src", "../../imagens/4-estrelas.png")
              .addClass("estrela");
          }
          break;
        case 5: {
          $estrela = $("<img>")
            .attr("src", "../../imagens/5-estrelas.png")
            .addClass("estrela");
        }
      }
      $catalogo.append($figura);
      $catalogo.append($titulo);
      let classificacao = filme.classificacao;
      if (classificacao == 18) {
        $classificaoetaria = $("<img>")
          .attr("src", "../../imagens/18.png")
          .addClass("classificacao");
        $catalogo.append($classificaoetaria);
      } else if (classificacao == 16) {
        $classificaoetaria = $("<img>")
          .attr("src", "../../imagens/16.png")
          .addClass("classificacao");
        $catalogo.append($classificaoetaria);
      } else if (classificacao == 14) {
        $classificaoetaria = $("<img>")
          .attr("src", "../../imagens/14.png")
          .addClass("classificacao");
        $catalogo.append($classificaoetaria);
      } else if (classificacao == 12) {
        $classificaoetaria = $("<img>")
          .attr("src", "../../imagens/12.png")
          .addClass("classificacao");
        $catalogo.append($classificaoetaria);
      } else {
        $classificaoetaria = $("<img>")
          .attr("src", "../../imagens/livre.png")
          .addClass("classificacao");
        $catalogo.append($classificaoetaria);
      }
      $catalogo.append($estrela);
      $catalogo.append($genero);
      $catalogo.append($sinopse);
      $catalogo.append($elenco);
      $catalogo.append($semelhantes);
      $.each(filme.titulosSemelhantes, function (idx, titulo) {
        let $tituloSemelhante = $("<li>").text(
          "| " + data[titulo - 1].titulo + " | "
        );
        $tituloSemelhante.addClass("semelhantes");
        $catalogo.append($tituloSemelhante);
      });

      $("body").append($catalogo);
    });
  });
});
