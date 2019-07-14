function listar () {
	var vetor = [];
	
	vetor[0] = document.getElementById("num1").value;
	vetor[1] = document.getElementById("num2").value;
	vetor[2] = document.getElementById("num3").value;
	vetor[3] = document.getElementById("num4").value;
	vetor[4] = document.getElementById("num5").value;

	
	for (var i = 0; i < vetor.length; i++) {
		var n1 = vetor[i];
		var n2 = n1 * 0.9;
		var n3 = n2.toFixed(1);   // Limitando o número de casas decimais para 1.
		document.getElementById("resposta").innerHTML += 'O valor ' + n1 + ' com desconto de 10% é igual a ' + n3 + '.' +'<br>';
		
	}
	
}