export class Stack<T> {
    private items: T[] = [];

    // Adiciona item no topo da pilha
    push(item: T) {
        this.items.push(item);
    }

    // Remove item do topo da pilha
    pop(): T | undefined {
        return this.items.pop();
    }

    // Retorna o item do topo da pilha sem remover
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Retorna a quantidade de itens na pilha
    count(): number {
        return this.items.length;
    }

    // Verifica se a pilha contém um item específico
    contains(item: T): boolean {
        return this.items.includes(item);
    }

    // Limpa todos os itens da pilha
    clear() {
        this.items = [];
    }

    // Mostra todos os itens da pilha
    printStack() {
        if (this.items.length === 0) {
            console.log("A Pilha está vazia!");
        } else {
            this.items.forEach(item => console.log(item));
        }
    }

    // Verifica se a pilha está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
