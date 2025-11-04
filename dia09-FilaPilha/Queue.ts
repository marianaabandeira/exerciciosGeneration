export class Queue<Type> {
    private QueueData: Type[] = [];

    // Adiciona elemento no final da fila
    enqueue(dataItem: Type): void {
        this.QueueData.push(dataItem);
    }

    // Remove e retorna o primeiro elemento
    dequeue(): Type | undefined {
        return this.QueueData.shift();
    }

    // Retorna o primeiro elemento sem remover
    peek(): Type | undefined {
        return this.QueueData[0];
    }

    // Retorna true se a fila estiver vazia
    isEmpty(): boolean {
        return this.QueueData.length === 0;
    }

    // Retorna a quantidade de elementos
    count(): number {
        return this.QueueData.length;
    }

    // Exibe todos os elementos
    printQueue(): void {
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
        } else {
            this.QueueData.forEach((item, index) => {
                console.log(`${index + 1} - ${item}`);
            });
        }
    }

    // Verifica se um elemento existe
    contains(dataItem: Type): boolean {
        return this.QueueData.includes(dataItem);
    }

    // Limpa a fila
    clear(): void {
        this.QueueData = [];
    }
}
