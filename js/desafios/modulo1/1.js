var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

var resultado = "O usuario mora em ";
resultado += endereco.cidade;
resultado += "/ ";
resultado += endereco.uf;
resultado += ", no bairro ";
resultado += endereco.bairro;
resultado += ", na ";
resultado += endereco.rua;
resultado += " com nº ";
resultado += endereco.numero;
resultado += ".";

console.log(resultado);
document.getElementById("msg").innerHTML = resultado;
