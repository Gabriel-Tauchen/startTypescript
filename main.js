var promptSync = require("prompt-sync");
var userPrompt = promptSync();
// function hello(person: string): string{
//     return `Hello, ${person}`
// }
// const userName = userPrompt("Please, enter your name: ")
// console.log(hello(userName))
//////////////////////////////////////////
var qtdText = userPrompt("A quantidade de notas que o aluno tem: ");
var qtd = Number(qtdText);
var soma = 0;
for (var i = 0; i < qtd; i++) {
    var nTexto = userPrompt("Nota ".concat(i, ": "));
    var n = Number(nTexto);
    soma += n;
}
var media = soma / qtd;
console.log("A m\u00E9dia do aluno \u00E9: ".concat(media));
