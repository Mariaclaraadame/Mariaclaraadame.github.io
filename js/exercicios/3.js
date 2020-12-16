function chamaFuncao()
{
	var numero= document.getElementById("numero").value;
	numero= parseInt(numero);
	var resultado= verificaPrimo(numero);
}
function verificaPrimo(numero)
{
	var divisor=0;
	for(i=1; i<=numero; i++)
	{
		if(numero%i==0) 
			divisor++;
	}
	if(divisor==2)
		var resultado= "é um número primo";
	else
		var resultado= "não é um número primo";
	alert (numero + " " + resultado);
}