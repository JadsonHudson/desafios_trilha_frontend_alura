/* 
    2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar.Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

    Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado. 
*/
function identifyLowestAndHighestValue(lotteryNumbers) {
    let [lowestValue, highestValue] = [lotteryNumbers[0], lotteryNumbers[0]];
    [lowestValue, highestValue] = lotteryNumbers.reduce((acc, value) => {
        if (value < acc[0]) {
            acc[0] = value;
        } else if (value > acc[1]) {
            acc[1] = value;
        }
        return acc;
    },
    [lowestValue, highestValue]);
    alert(`O menor número é: ${lowestValue} e o maior número é: ${highestValue}`);
}

function main() {
    try {
        let lotteryNumbers = prompt("Digite o números da loteria separados por vírgula: ").split(",").map(Number);
        identifyLowestAndHighestValue(lotteryNumbers);

    } catch (error) {
        throw new Error("Erro ao encontrar o menor e o maior valor. --> " + error.message);
    }
}

main()