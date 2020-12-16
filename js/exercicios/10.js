function chamaFuncao()
{
    var numero= document.getElementById("numero").value;
    numero= parseInt(numero);
    var resultado= custoTotal(numero);
    alert ("O custo total da compra é de " + resultado + " reais");
}
function custoTotal(numero)
{
    if (numero<12)
        return numero*130/100;
    else
        return numero*1;
}