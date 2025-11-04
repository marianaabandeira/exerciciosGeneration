import promptSync from "prompt-sync" // biblioteca para entrada de dados no terminal
import { Stack } from "./Stack" // importa a classe Stack

const prompt = promptSync() // inicializa a função de entrada de dados
const pilhaLivros = new Stack<string>() // cria uma pilha para armazenar nomes de livros

let opcao: string // variável para armazenar a opção do usuário

do {
    console.log("\n************************************")
    console.log("1 - Adicionar livro na Pilha")
    console.log("2 - Listar todos os Livros")
    console.log("3 - Retirar livro da Pilha")
    console.log("0 - Sair")
    console.log("************************************")

    opcao = prompt("Escolha uma opção: ") // lê a opção do usuário

    if(opcao === "1") { // Adicionar livro
        const livro = prompt("Digite o nome do livro: ") // lê o nome do livro
        pilhaLivros.push(livro) // adiciona o livro à pilha
        console.log("\nPilha:\n") // mostra a pilha atualizada
        pilhaLivros.printStack() // exibe todos os livros na pilha
        console.log("\nLivro Adicionado!") // confirma a adição
    }
    else if(opcao === "2") { // Listar livros
        console.log("\nLivros na Pilha:") // cabeçalho da lista
        pilhaLivros.printStack() // exibe todos os livros na pilha
    }
    else if(opcao === "3") { // Retirar livro
        const removido = pilhaLivros.pop() // remove o livro do topo da pilha
        if(!removido) {
            console.log("\nA Pilha está vazia!") // se estiver vazia
        } else {
            console.log("\nPilha Atualizada:\n") // mostra a pilha atualizada
            pilhaLivros.printStack()
            console.log("\nO Livro foi retirado da pilha!") // confirma
        }
    }
    else if(opcao === "0") { 
        console.log("\nPrograma finalizado.") // mensagem de saída
    }

} while(opcao !== "0") // repete até o usuário escolher sair


