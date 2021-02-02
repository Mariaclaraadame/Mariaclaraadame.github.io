$(function () {
  //Declara palavras no glossario
  const glossario = [
    {
      id: 1,
      termo: "W3C",
      definicao:
        "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet",
      autor: "José Borges",
      data: "2015-04-01",
    },
    {
      id: 2,
      termo: "HTML",
      definicao:
        "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web",
      autor: "Pedro Silva",
      data: "2017-05-12",
    },
    {
      id: 3,
      termo: "CSS",
      definicao:
        "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web.",
      autor: "Maria Machado",
      data: "2018-10-11",
    },
  ];

  //Exibe na tela os termos disponíveis do glossário
  exibeTermos();
  //Mostra definicão ao clicar em um termo
  $("#listaDeTermos li").on("click", mostraDefinicao);

  //Declarações de funções
  function exibeTermos() {
    $(glossario).each(function (index, termos) {
      const titulo = termos.termo;
      const idDoTermo = index;
      const li = `<li value="${idDoTermo}">  ${titulo} </li>`;

      $("#listaDeTermos").append($(li));
    });
  }

  function mostraDefinicao(event) {
    console.log(event.target);

    const id = $(event.target).val();
    const termoClicado = glossario[id];

    $("#termo").text(termoClicado.termo);
    $("#definicao").text(termoClicado.definicao);
    $("#autor").text(termoClicado.autor);
    $("#data").text(termoClicado.data);
  }
});
