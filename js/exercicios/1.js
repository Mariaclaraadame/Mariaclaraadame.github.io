function chamaFuncao()
{
	var numero1= document.getElementById("numero1").value;
	numero1= parseInt(numero1);
	var numero2= document.getElementById("numero2").value;
	numero2= parseInt(numero2);
	var resultado= fazSoma(numero1, numero2);
	alert ("O resultado da soma entre " + numero1 + " e " + numero2 + " é " + resultado);
}
function fazSoma (numero1, numero2)
{
	return numero1 + numero2;
}