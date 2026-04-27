var operacao = prompt("que operaçao deseja realizar? 1-soma | 2-subtraçao | 3-divisao ");
var num1 = Number(prompt("digite o primeiro numero: "));
var num2 = Number(prompt("digite o segundo numero: "));
var res;

if(operacao == 1){
    res = num1 + num2;
}else if(operacao == 2){
    res = num1 - num2;
}else{
    res = num1 / num2;
}

alert("resultado: " +res);