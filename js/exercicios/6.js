function chamaFuncao() 
{
    var fabrica= document.getElementById("fabrica").value;
    fabrica= parseInt(fabrica);
    var distribuidor= 28/100;
    var impostos= 45/100;
    var resultado= custoCarro(fabrica, distribuidor, impostos);
    alert ("O custo final ao consumidor é de " + resultado + " reais");
}
function custoCarro(fabrica, distribuidor, impostos)
{
    return fabrica + fabrica*distribuidor + fabrica*impostos;
}