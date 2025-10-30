// Importando a biblioteca
const leia = require('readline-sync')

// Variaveis
let produto
let precoUnitario

// Entradam de dados
let codigoDoProduto = leia.questionInt("Digite o código do produto de 1 a 6: ")
let quantidade = leia.questionInt("Digite a quantidade: ")

// 
switch(codigoDoProduto){
    case 1:
        produto = "Cachorro Quente"
        precoUnitario = 10.00
        break       
    case 2:
        produto = "X-Salada"
        precoUnitario = 15.00
        break
    case 3:
        produto = "X-Bacon"
        precoUnitario = 18.00
        break
    case 4:
        produto = "Bauru"
        precoUnitario = 12.00
        break   
    case 5:
        produto = "Refrigerante"
        precoUnitario = 8.00
        break   
    case 6:
        produto = "Suco de laranja"
        precoUnitario = 13.00
        break
    default:
        console.log("Código inválido!")
}

//
if (codigoDoProduto >=1 && codigoDoProduto <=6){
    let total = precoUnitario * quantidade
    console.log("Produto: " + produto)
    console.log("Total a pagar: R$ " + total)

}