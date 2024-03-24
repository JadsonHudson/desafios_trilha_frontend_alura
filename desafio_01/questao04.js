/* 
    4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.
*/
function primeNumbers(numbers) {
    let primes = numbers.filter(number => {
        if (number === 1) {
            return false;
        } else if (number === 2) {
            return true;
        } else if (number % 2 === 0) {
            return false;
        } else {
            for (let i = 3; i <= Math.sqrt(number); i += 2) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }

    })

    alert(`Os números primos encontrados na lista são: ${primes}`);
}

function main() {
    try {
        let numbers = prompt("Digite os números separados por vírgula: ").split(",").map(Number);

        primeNumbers(numbers);

    } catch (error) {
        throw new Error("Erro ao encontrar os números primos. --> " + error.message);
    }
}

main()