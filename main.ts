const promptSync = require("prompt-sync")
const userPrompt = promptSync()

// function hello(person: string): string{
//     return `Hello, ${person}`
// }
// const userName = userPrompt("Please, enter your name: ")

// console.log(hello(userName))

//////////////////////////////////////////

// let qtdText = userPrompt("A quantidade de notas que o aluno tem: ");
// let qtd: number = Number(qtdText);
// let soma: number = 0;
// for(let i=0;i<qtd;i++){
//     let nTexto = userPrompt(`Nota ${i}: `);
//     let n: number = Number(nTexto);
//     soma += n;
// }
// let media: number = soma/qtd;
// console.log(`A média do aluno é: ${media}`);

//////////////////////////////////////////////////////////

//teste tipos especiais

// any
// let valor: any = 10;
// valor = "texto";
// valor = true;
// console.log("Valor (any):", valor);

//unknown | as (casting)
// let dado: unknown = "123";
// // console.log(dado.toUpperCase()); // Erro
// //as garante que é uma string
// //fazendo conversão de tipo
// let texto: string = dado as string;
// console.log("Texto (unknown → string):",
// texto.toUpperCase());

// never

// function erroFatal(mensagem: string): never{
//     throw new Error(mensagem);
// }
// erroFatal("Sou muito bonito!");

// undefined e null

// let indefinido: undefined = undefined;
// let nulo: null = null;
// console.log("Indefinido:", indefinido);
// console.log("Nulo:", nulo);

///////////////////////////////////////////