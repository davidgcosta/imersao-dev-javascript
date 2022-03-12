var nome = "Barry";
var notaDoPrimeiroBimestre = 9.750;
var notaDoSegundoBimestre = 7.255;
var notaDoTerceiroBimestre = 8.259;
var notaDoQuartoBimestre = 9.655;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;
var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome + "!");
console.log("Sua nota final é: " + notaFixada);

