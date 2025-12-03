// Lista 01 – Collection Array (Resolva 1 Exercício)
// Escreva um programa para criar uma Collection Array de Objetos do
// tipo string. O programa deverá solir ao usuário, que ele digite
// via teclado 5 cores e deverá adicioná-las individualmente no Array.
// Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem
//  crescente.

import entrada = require('readline-sync')

const listaCores: Array <string> = new Array<string>()

for( let i = 0; i < 5; i++){
    let cor = entrada.question("Digite uma cor: ")
    listaCores.push(cor)
}

console.log("Lista de todas as cores: ")
console.log(listaCores)
console.log("Cores ordenadas em ordem crescente: ")
console.log(listaCores.sort())



