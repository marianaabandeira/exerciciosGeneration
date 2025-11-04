import promptSync from "prompt-sync" // biblioteca para entrada de dados no terminal
import { Queue } from "./Queue" // importa a classe Queue

const prompt = promptSync() // inicializa a função de entrada de dados
const filaClientes = new Queue<string>() // cria uma fila para armazenar nomes de clientes

let opcao // variável para armazenar a opção do usuário

do {
    console.log("\n************************************")
    console.log("1 - Adicionar Cliente na Fila")
    console.log("2 - Listar todos os Clientes")
    console.log("3 - Retirar cliente da Fila")
    console.log("0 - Sair")
    console.log("************************************")

    opcao = prompt("Escolha uma opção: ") // lê a opção do usuário

    if(opcao === "1") { // Adicionar cliente
        const nome = prompt("Digite o nome do cliente: "); // lê o nome do cliente
        filaClientes.enqueue(nome); // adiciona o nome à fila
        console.log("Cliente Adicionado!") // confirma a adição
    } 
    else if(opcao === "2") { // Listar clientes
        console.log("\nClientes na fila:") // cabeçalho da lista
        filaClientes.printQueue(); // exibe todos os clientes na fila
    } 
    else if(opcao === "3") { // Chamar cliente
    const chamado = filaClientes.dequeue(); // remove o primeiro cliente da fila
    if (!chamado) {
        console.log("\nA Fila está vazia!"); // se estiver vazia
    } else {
        console.log("\nFila:\n");
        filaClientes.printQueue(); // mostra a fila atualizada
        console.log("\nO Cliente foi Chamado!"); // confirma
    } 
    }
    
    else if(opcao === "0") { // Sair
        console.log("Programa finalizado.") // mensagem de saída
    } 

} while(opcao !== "0") // repete até o usuário escolher sair
