function calculaMedia(){
  if(document.getElementsByName("nota").value == ""){
	  alert("Preencha a nota");
      return false;
  }
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var media = (nota1+nota2+nota3+nota4)/4;
  
  var notaFinal = media.toFixed(1);
  
  if(media >= 7){
	alert("Aprovado com a nota: " + notaFinal);
}
  else{
	alert("Opps! Reprovado com a nota: " + notaFinal);
}
  event.preventDefault();
}


//var nota1 = 9
//var nota2 = 7
//var nota3 = 10
//var nota4 = 5
//var notaFinal = (nota1 + nota2 + nota3 + nota4)/4
//var notaA = notaFinal.toFixed(1)
//console.log(notaFinal)
//console.log(notaA)
//fim média das notas
// isso é um comentário
// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação.