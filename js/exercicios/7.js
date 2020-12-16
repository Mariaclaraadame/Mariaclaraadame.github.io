function chamaFuncao()
{
    var salario= document.getElementById("salario").value;
    salario= parseInt(salario);
    var numero= document.getElementById("numero").value;
    numero= parseInt(numero);
    var total= document.getElementById("total").value;
    total= parseInt(total);
    var carro= document.getElementById("carro").value;
    carro= parseInt(carro);
    var resultado= salarioFinal(salario, numero, total, carro);
    alert ("O salário final é de " + resultado + " reais");
}
function salarioFinal(salario, numero, total, carro)
{
    return salario + carro*numero + 5/100*total;
}