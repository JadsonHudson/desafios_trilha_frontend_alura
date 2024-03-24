/* 
    8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.
*/
function calculateLateFee(days) {
    const fee = 0.5;
    let fine = days * fee;
    return fine;
}
function main() {
    try {
        let days = prompt("Digite a quantidade de dias de atraso: ");
        alert(`O valor da multa é: ${calculateLateFee(days)}`);
        

    } catch (error) {
        throw new Error("Erro ao calcular a multa. --> " + error.message);
    }
}

main()