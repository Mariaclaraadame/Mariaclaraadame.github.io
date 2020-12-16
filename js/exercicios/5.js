function chamaFuncao()
{
    var salario= document.getElementById("salario").value;
    salario= parseInt(salario);
    var reajuste= document.getElementById("reajuste").value;
    reajuste= parseInt(reajuste);
    var resultado= novoSalario(salario, reajuste);
    alert ("O novo salário, após o reajuste, é de " + resultado + " reais");
}
function novoSalario(salario, reajuste)
{
    return (salario*(100+reajuste))/100;
}