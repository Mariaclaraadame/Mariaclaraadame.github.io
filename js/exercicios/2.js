function chamaFuncao()
{
    var numero1= document.getElementById("numero1").value;
    numero1= parseInt(numero1);
    var numero2= document.getElementById("numero2").value;
    numero2= parseInt(numero2);
    var resultado= verificaMaior(numero1, numero2);
    alert ("O maior número entre " + numero1 + " e " + numero2 + " é " + resultado);
}
function verificaMaior(numero1, numero2)
{
    if (numero1>numero2)
        return numero1;
    else
        return numero2;
}