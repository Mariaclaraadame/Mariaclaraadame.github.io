var nomes = ["Diego", "Gabriel", "Lucas"];
var ul = document.createElement("ul");
document.querySelector(".resultado").appendChild(ul);
for (const nome of nomes) {
  var li = document.createElement("li");
  li.innerHTML = nome;
  document.querySelector("ul").appendChild(li);
}
