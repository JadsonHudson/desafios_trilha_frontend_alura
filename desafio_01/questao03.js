/* 
    3. Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados. No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram. Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido. Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação. 

    Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.
*/
function agesOfAlchemistsOrdered(agesOfAlchemists) {
    agesOfAlchemists.sort((a, b) => a - b);
    alert(`A ordem crescente das idades dos alquimistas é: ${agesOfAlchemists}`);
}

function main() {
    try {
        let agesOfAlchemists = prompt("Digite as idades dos alquimistas separados por vírgula: ").split(",").map(Number);
        agesOfAlchemistsOrdered(agesOfAlchemists);

    } catch (error) {
        throw new Error("Erro ao ordenas as idades. --> " + error.message);
    }
}

main()