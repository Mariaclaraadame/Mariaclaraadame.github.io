function chamaFuncao()
{
    var nota1= document.getElementById("nota1").value;
    nota1= parseInt(nota1);
    var nota2= document.getElementById("nota2").value;
    nota2= parseInt(nota2);
    var nota3= document.getElementById("nota3").value;
    nota3= parseInt(nota3);
    var resultado= mediaPonderada(nota1, nota2, nota3);
    alert ("A média ponderada entre " + nota1 + ", " + nota2 + " e " + nota3 + " é " + resultado);
}
function mediaPonderada(nota1, nota2, nota3)
{
    return (nota1*2 + nota2*3 + nota3*5)/10;
}