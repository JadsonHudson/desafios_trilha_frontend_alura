/* 
    7.Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.
*/
function totalSum(values) {
    let total = values.reduce((acc, value)=> acc + value, 0);
    return total;
}
function main() {
    try {
        let values = prompt("Digite os valores dos produtos separados por vírgula e as casas decimais separadas por ponto.(Exemplo: 4.5,6.3): ").split(",").map(Number);
        alert(`A quantidade de palavras na frase é: ${totalSum(values)}`);
        

    } catch (error) {
        throw new Error("Erro ao somar os valores. --> " + error.message);
    }
}

main()