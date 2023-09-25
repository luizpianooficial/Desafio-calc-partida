// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
let vitorias = 12
let derrotas = 2
let nivel;
let calc = vitorias - derrotas

function caluladora(calc) {
    if (calc <= 10) {
        nivel = "Ferro"
    } else if (calc >=11 && calc <= 20) {
        nivel = "Bronze"
    }else if (calc >=21 && calc <= 50) {
        nivel = "Prata"
    }else if (calc >=51 && calc <= 80) {
        nivel = "Ouro"
    }else if (calc >=81 && calc <= 90) {
        nivel = "Diamante"
    }else if (calc >=91 && calc <= 100) {
        nivel = "Lendário"
    }else if (calc >=11 && calc <= 20) {
    }else{
        nivel = "Imortal"
    }


}

caluladora(calc)

console.log(`O Herói tem de saldo de ${calc} está no nível de ${nivel}`)