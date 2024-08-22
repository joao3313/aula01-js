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

//Alt+shit+baixo 

/* 
Outro modelo de calculo media entre 2 alunos

var nome1, nome2 = "",
var nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8 = 0;

     posso usar o windows.prompt ou não
nome1 = prompt("Digite o Nome do Aluno 1:");
nota1 = parseFloat(prompt("Digite a Nota1 do Aluno 1:"));
nota2 = parseFloat(prompt("Digite a Nota1 do Aluno 2:"));
nota3 = parseFloat(prompt("Digite a Nota1 do Aluno 3:"));
nota4 = parseFloat(prompt("Digite a Nota1 do Aluno 4:"));

nome2 = prompt("Digite o Nome do Aluno 2:");
nota5 = parseFloat(prompt("Digite a Nota1 do Aluno 5:"));
nota6 = parseFloat(prompt("Digite a Nota1 do Aluno 6:"));
nota7 = parseFloat(prompt("Digite a Nota1 do Aluno 7:"));
nota8 = parseFloat(prompt("Digite a Nota1 do Aluno 8:"));

var media1, media2 = 0;

media1 = (nota1+nota2+nota3+nota4)/4;
media2 = (nota5+nota6+nota7+nota8)/4;

var mensagem = `${nome1}, sua média é ${media1}, Parabéns!
var mensagem = `${nome2}, sua média é ${media2}, Parabéns!

` ;
alert(mensagem);

