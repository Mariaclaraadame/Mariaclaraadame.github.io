var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", " ReactJS", " Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", " Ruby on Rails", " Elixir"],
  },
];
function exibe(usuarios) {
  var resposta = "";
  for (const usuario of usuarios) {
    resposta = `O ${usuario.nome} possui as habilidades: ${usuario.habilidades} </br>`;
    document.getElementById("resposta").innerHTML += resposta;
  }
}
exibe(usuarios);
