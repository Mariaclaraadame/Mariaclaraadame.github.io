function chamaFuncao()
{
    var numero1= document.getElementById("numero1").value;
    numero1= parseInt(numero1);
    var numero2= document.getElementById("numero2").value;
    numero2= parseInt(numero2);
    var resultado= verificaHipotenusa(numero1, numero2);
    alert ("O tamanho da hipotenusa de um triângulo com catetos valendo " + numero1 + " e " + numero2 + " é " + resultado);
}
function verificaHipotenusa(numero1, numero2)
{
    return Math.sqrt(Math.pow(numero1,2) + Math.pow(numero2,2));
}