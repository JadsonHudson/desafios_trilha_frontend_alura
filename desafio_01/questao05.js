/* 
   5. Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"
*/

function main() {
    try {
        let numberOfWords = prompt("Escreva a frase: ").split(/[\s,?]+/).map(String);
        alert(`A quantidade de palavras na frase é: ${numberOfWords.length}`);
        

    } catch (error) {
        throw new Error("Erro ao contar a quantidade de palavras. --> " + error.message);
    }
}

main()