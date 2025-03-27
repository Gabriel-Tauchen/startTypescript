const promptSync = require("prompt-sync")
const userPrompt = promptSync()

// function hello(person: string): string{
//     return `Hello, ${person}`
// }
// const userName = userPrompt("Please, enter your name: ")

// console.log(hello(userName))

//////////////////////////////////////////

let qtdText = userPrompt("A quantidade de notas que o aluno tem: ");
let qtd: number = Number(qtdText);
let soma: number = 0;
for(let i=0;i<qtd;i++){
    let nTexto = userPrompt(`Nota ${i}: `);
    let n: number = Number(nTexto);
    soma += n;
}
let media: number = soma/qtd;
console.log(`A média do aluno é: ${media}`);