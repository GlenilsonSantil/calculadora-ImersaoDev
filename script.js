var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Qual e a operação? | + | - | * | / |")

if(operacao == "+"){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == "-"){
   var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == "*"){
   var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == "/"){
   var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} 
else {
  document.write("<h2>⚠ ERRO ⚠</h2>")
}