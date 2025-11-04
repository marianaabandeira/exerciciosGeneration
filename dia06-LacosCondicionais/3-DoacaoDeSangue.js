// Importando a biblioteca
const leia = require('readline-sync')

// Entrada de dados
nomeDoDoador = leia.question("Digite o nome do doador: ")
idadeDoDoador = leia.questionInt("Digite a idade do doador: ")
seDoou = leia.question("O doador já doou sangue antes? (sim/não): ") === "sim"

// Processamento e Saída de dados
if (idadeDoDoador < 18 || idadeDoDoador > 69){
    console.log( nomeDoDoador + " não está apto(a) para doar sangue!")
} 
else if (idadeDoDoador >= 18  && idadeDoDoador <= 59){
    console.log( nomeDoDoador + " está apto(a) para doar sangue!")
}
else if (idadeDoDoador >=60 && idadeDoDoador <=69){
}
    if(seDoou){
        console.log(nomeDoDoador + " está apto(a) para doar sangue!")
    } else {
        console.log(nomeDoDoador + " não está apto(a) para doar sangue!")
    }