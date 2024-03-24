/* 
    9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?
*/
function damageSuffered(hits) {
    let hp = 100;
    const damage = 20;
    let newHp = hp - (hits * damage);
    return newHp;
}
function main() {
    try {
        let hits = prompt("Digite a quantidade de ataques realizados: ");
        alert(`Quantidade de vida restante é: ${damageSuffered(hits)}`);
        

    } catch (error) {
        throw new Error("Erro ao calcular a multa. --> " + error.message);
    }
}

main()