//Exibir no terminal
console.log("Olá Mundo");
//Exibir no navegador
document.write("Olá Navegador!");
//Alerta de confirmação 
alert("Alerta de Confirmação!");

/* comentario de bloco
tudo dentro do / asterisco é comentario 
*/


//abaixo captura o nome do aluno
var nome = window.prompt("Informe o nome:");

//abaixo linhas de codigos , capturas as notas
var nota01 = window.prompt("Digite a nota 1");
nota01 = parseFloat(nota01);
var nota02 = window.prompt("Digite a nota 2");
nota02 = parseFloat(nota02);
var nota03 = window.prompt("Digite a nota 3");
nota03 = parseFloat(nota03)
var nota04 = window.prompt("Digite a nota 4");
nota04 = parseFloat(nota04);

//gera a mensagem do nome e calculo media 
var media = (nota01 + nota02 + nota03 + nota04)/4;

//exibe mensagem nome:
var mensagem = nome + ", você obteve a média : " + media;
window.alert (mensagem);


// linha abaixo exibe somente a média das notas sem o nome
//window.alert("A média das notas é:" + media);