/* 
    1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala.Foram realizadas 3 avaliações com nota máxima de 10 pontos.Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

    ** Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.** 
*/
function mediaCalculator(notas) {
    if (notas.length === 0) {
        throw new Error("Nenhuma nota foi informada")
    } else if (notas.length > 3) {
        throw new Error("Número de notas inválido")
    };

    notas.forEach(nota => {
        if (nota < 0 || nota > 10) { throw new Error("Há uma ou mais notas inválidas, atente-se ao limite da nota mínima de 0 e máxima de 10.") };
    });

    let media = notas.reduce((acc, value) => acc + value, 0) / notas.length;

    alert(`A média das notas é: ${media.toFixed(2)}`);
}

function main() {
    try {
        let notas = prompt("Digite as notas separadas por vírgula: ").split(",").map(Number);
        mediaCalculator(notas);
      
    } catch (error) {
        throw new Error("Erro ao calcular a média das notas. --> " + error.message);
    }
}

main()