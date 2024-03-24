/* 
   11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.
*/
function calculateAge(dateOfBirth) {
    const today = new Date();
    const birth = new Date(dateOfBirth);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    let months = m < 0 ? m + 12 : m;
    if (today.getDate() < birth.getDate()) {
        if (months === 0) {
            months = 11;
            age--;
        } else {
            months--;
        }
    }

    const diaDif = today.getDate() - birth.getDate();
    let days = diaDif >= 0 ? diaDif : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + diaDif;

    return { years: age, months: months, days: days };
}
function main() {
    try {
        let dateOfBirth = prompt("Digite a sua data de nascimento: ");
        let age = calculateAge(dateOfBirth);
        alert(`Idade: ${age.years} anos, ${age.months} meses e ${age.days} dias.`);


    } catch (error) {
        throw new Error("Erro ao calcular a quantidade de letras maiúsculas. --> " + error.message);
    }
}

main()