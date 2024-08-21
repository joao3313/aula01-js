alert("Alerta de Confirmação!");

/* comentario de bloco
tudo dentro do / asterisco é comentario 
*/


//abaixo captura o nome do aluno
var nome01 = window.prompt("Informe o nome:");

//abaixo linhas de codigos , capturas as notas
var nota01 = window.prompt("Digite a nota 1");
nota01 = parseFloat(nota01);
var nota02 = window.prompt("Digite a nota 2");
nota02 = parseFloat(nota02);
var nota03 = window.prompt("Digite a nota 3");
nota03 = parseFloat(nota03);
var nota04 = window.prompt("Digite a nota 4");
nota04 = parseFloat(nota04);

//gera a mensagem do nome e calculo media 
var media01 = (nota01 + nota02 + nota03 + nota04)/4;



var nome02 = window.prompt("Informe o nome:");

var nota05 = window.prompt("Digite a nota 5");
nota05 = parseFloat(nota05);
var nota06 = window.prompt("Digite a nota 6");
nota06 = parseFloat(nota06);
var nota07 = window.prompt("Digite a nota 7");
nota07 = parseFloat(nota07);
var nota08 = window.prompt("Digite a nota 8");
nota08 = parseFloat(nota08);
var media02 = (nota05 + nota06 + nota07 + nota08)/4;

var mensagem = nome01 + " e "+ nome02 +"\n"+"Vocês obteveram a média de : " + media01 + " e " + media02;
window.alert (mensagem);

//exibe mensagem nome:
//var mensagem = nome + ", você obteve a média : " + media;
//window.alert (mensagem);

//var mensagem = nome + ", vocês tiveram a média de nota:",media;
//window.alert(mensagem);

//window.alert("A média da notas e:"+ media);