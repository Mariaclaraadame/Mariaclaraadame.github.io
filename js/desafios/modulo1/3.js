function temHabilidade(skills) {
  var index = skills.indexOf("Javascript");
  if (index != -1) {
    return true;
  }
  return false;
}
var skills = ["Javascript", "ReactJS", "React Native"];
var resposta = temHabilidade(skills);
document.getElementById("resposta").innerHTML = "Retorno: " + resposta;
