$(function () {
  $("#botao").click(function (event) {
    event.preventDefault();
    const soluto = parseFloat($("#soluto").val());
    const solvente = parseFloat($("#solvente").val());
    const massaMolarNB = 261;
    const molaridade = (soluto / (massaMolarNB * solvente)).toFixed(5);
    const solubilidade = 100 * (soluto / (solvente * 1000));
    const texto = `<p><b>1° passo: </b> Molaridade = Massa do soluto / Massa molar do soluto x Volume do solvente</p> 
                   <p><b>2° passo: </b> Molaridade = ${soluto} / (${massaMolarNB} x ${solvente})</p>  
                   <p class="resp small">A concentração molar (molaridade) da solução é ${molaridade}.</p>`;
    if (soluto > solubilidade) {
      $(".resultado").html(
        `${texto} <p class="resp small">Havendo formação de corpo de fundo.</p>`
      );
    } else {
      $(".resultado").html(
        `${texto} <p class="resp small">Não havendo formação de corpo de fundo.</p>`
      );
    }
  });
});
