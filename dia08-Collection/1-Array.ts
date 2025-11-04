import readlineSync = require("readline-sync") // // Importando a biblioteca

// Cria um array vazio para guardar as cores
const cores: string[] = []

// Solicita ao usuário que digite 5 cores
for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `) // Solicita a cor ao usuário
    cores.push(cor); // Adiciona a cor digitada ao array
}

// Mostra todas as cores adicionadas
console.log("\nListar todas as cores:") // Mostra as cores adicionadas
for (let cor of cores) { // Itera sobre o array de cores
    console.log(cor) // Imprime cada cor
}

// Mostra todas as cores em ordem crescente
const coresOrdenadas = [...cores] // Cria uma cópia do array para não alterar o original
coresOrdenadas.sort() // Ordena em ordem alfabética

console.log("\nOrdenar as cores:") // Mostra as cores ordenadas
for (let cor of coresOrdenadas) { // Itera sobre o array ordenado
    console.log(cor) // Imprime cada cor
}


