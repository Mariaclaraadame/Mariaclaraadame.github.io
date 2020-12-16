function chamaFuncao()
{
    var fahrenheit= document.getElementById("fahrenheit").value;
    fahrenheit= parseInt(fahrenheit);
    var resultado= grausCelcius (fahrenheit);
    alert (fahrenheit + " graus Fahrenheit é igual à " + resultado + " graus Celcius");
}
function grausCelcius(fahrenheit)
{
    return (fahrenheit-32)*5/9;
}