var ul = document.createElement("ul");
document.querySelector(".resultado").appendChild(ul);
function adicionar() {
  var nome = document.querySelector(".nome").value;
  var li = document.createElement("li");
  li.innerHTML = nome;
  document.querySelector("ul").appendChild(li);
  document.querySelector(".nome").value = "";
}
