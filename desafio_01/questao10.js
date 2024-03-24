/* 
   10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”
*/
function numberOfCapitalLetters(phrase) {
    
    let count = phrase.reduce((acc, letter) =>
        letter === letter.toUpperCase() && letter != ' ' ? acc + 1 : acc, 0
    )
    
    return count;
}
function main() {
    try {
        let phrase = prompt("Digite a frase: ").split('');
        console.log(phrase);
        alert(`Quantidade de letras maiúsculas é: ${numberOfCapitalLetters(phrase)}`);


    } catch (error) {
        throw new Error("Erro ao calcular a quantidade de letras maiúsculas. --> " + error.message);
    }
}

main()