function Converter() {
    var elementValue = document.getElementById("value"); // pega todo o input
    var value = elementValue.value; // para pegar apenas o valor, e não todo o input
    var valueInDolar = parseFloat(value);//o padrão do input é string
    

    var valueInReal = valueInDolar * 5;
    var valueInEuro = valueInDolar * 6;

    var elementConvertedValue = document.getElementById("convertedValue"); // captura o elemento, nesse caso foi o h2
    var elementConvertedValue2 = document.getElementById("convertedValue2");
    var convertedValue = `O resultado em Real é R$ ${valueInReal}`;
    var convertedValue2 = "O resultado em Euro é € " + valueInEuro;
    elementConvertedValue.innerHTML = convertedValue; // propriedade que insere o item no elemento capturado, nesse caso insere o resultado no h2
    elementConvertedValue2.innerHTML = convertedValue2;

    console.log(valueInReal);
    console.log(valueInEuro); 
}