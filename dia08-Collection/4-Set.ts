import readlineSync = require("readline-sync") // Importando a biblioteca

// Cria a Collection Set do tipo number e inicializa com 10 valores
const setNumeros: Set<number> = new Set<number>([0,1,2,3,4,5,6,7,8,9])

console.log("\nNúmeros cadastrados: ") // Mostra os números cadastrados na Collection Set
for (let numero of setNumeros) { // Itera sobre a Collection Set
    console.log(numero) // Imprime cada número
}

// Solicita ao usuário um número
const numeroUsuario: number = readlineSync.questionInt("Digite o número que você deseja encontrar: ")

// Verifica se o número está na Collection Set
if (setNumeros.has(numeroUsuario)) { // Usa o método has() para verificar a existência do número
    console.log(`O número ${numeroUsuario} foi encontrado!`) // Informa que o número foi encontrado
} else {
    console.log(`O número ${numeroUsuario} não foi encontrado!`) // Informa que o número não foi encontrado
}
