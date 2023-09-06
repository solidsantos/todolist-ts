class Tarefa {
    #descricao: string;
    #concluida: boolean = false;
    #prioridade?: string;
    constructor(descricao: string, prioridade?: string){
        this.#descricao = descricao;
        this.#prioridade = prioridade;
    }
    get getPrioridade(){
        return this.#prioridade;
    }
    toString() {
        return this.#descricao + (this.#concluida ? ' (Concluída)' : ' (Pendente) '); 
    }

}
class ListaDeTarefas {
    protected tarefas: Tarefa[] = [];
    adicionarTarefa(descricao: string) {
        this.tarefas.push(new Tarefa(descricao));
    }
    listarTarefa(){
       this.tarefas.forEach(tarefas => {
            console.log(tarefas.toString());
       });
    }
};

class ListaPrioritaria extends ListaDeTarefas {
    adicionarTarefaPrioritaria(descricao: string, prioridade: string) {
        this.tarefas.push(new Tarefa(descricao, prioridade));
    }

    // Fazer o override
    listarTarefa(): void {
        this.tarefas.forEach(tarefas => {
            console.log(tarefas.toString() + tarefas.getPrioridade);
       });
    }
};

const lista = new ListaDeTarefas();
const listaP = new ListaPrioritaria();
lista.adicionarTarefa('teste');
lista.adicionarTarefa('teste2');
listaP.adicionarTarefaPrioritaria('teste', 'baixa');
lista.listarTarefa();
listaP.listarTarefa();
//console.table(listaP.tarefas);



