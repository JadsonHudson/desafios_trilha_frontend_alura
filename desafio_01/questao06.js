/* 
    6. Escreva um programa para encontrar o fatorial do número 12.
*/
function fatorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * fatorial(number - 1);
    }
}
function main() {
    try {
        let number = prompt("Escreva número: ");
        alert(`A quantidade de palavras na frase é: ${fatorial(number)}`);
        

    } catch (error) {
        throw new Error("Erro ao contar a quantidade de palavras. --> " + error.message);
    }
}

main()