$(function () {
  $("#botao").click(function (event) {
    event.preventDefault();
    const soluto = parseFloat($("#soluto").val());
    const solvente = parseFloat($("#solvente").val());
    const multiplicacao = 800 * solvente;
    if (multiplicacao === soluto) {
      $(".resultado").html(
        `<p>1L água - 800g nitrato de Bário</p> 
         <p>${solvente}L água - X nitrato de Bário</p> 
         <p>X = ${multiplicacao}</p> 
         <p class="resp small">Era esperado "${multiplicacao}"g nitrato de Bário </br> Você forneceu "${soluto}"g nitrato de Bário </br> Então, essa solução é saturada.</p>`
      );
    } else if (multiplicacao > soluto) {
      $(".resultado").html(
        `<p>1L água - 800g nitrato de Bário</p> 
         <p>${solvente}L água - X nitrato de Bário</p> 
         <p>X = ${multiplicacao}</p> 
         <p class="resp small">Era esperado "${multiplicacao}"g nitrato de Bário </br> Você forneceu "${soluto}"g nitrato de Bário </br> Então, essa solução é insaturada.</p>`
      );
    } else {
      $(".resultado").html(
        `<p>1L água - 800g nitrato de Bário</p> 
         <p>${solvente}L água - X nitrato de Bário</p> 
         <p>X = ${multiplicacao}</p> 
         <p class="resp small">Era esperado "${multiplicacao}"g nitrato de Bário </br> Você forneceu "${soluto}"g nitrato de Bário </br> Então, essa solução é supersaturada.</p>`
      );
    }
  });
});
