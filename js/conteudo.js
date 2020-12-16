function dropdown(e) {
  e.target.nextElementSibling.classList.toggle("ativo");
}
function inverteSeta(e) {
  document
    .querySelector(".primeiro-trimestre .seta")
    .classList.toggle("seta-invertida");
}
document
  .querySelector(".primeiro-trimestre")
  .addEventListener("click", function (e) {
    dropdown(e);
    inverteSeta(e);
  });
