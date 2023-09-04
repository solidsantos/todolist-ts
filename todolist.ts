class Tarefa {
    #descricao: string;
    #concluida: boolean;
    constructor(descricao: string, concluida: boolean) {
        this.#descricao = descricao;
        this.#concluida = concluida;
    };

    public set setConcluida(concluida: boolean) {
        this.#concluida = concluida;
    }

    public get getDescricao(): string {
        return this.#concluida ? this.#descricao + ' (Concluída)' : this.#descricao + ' (Pendente)'
    }
    public set setDescricao(descricao: string){
        this.#descricao = descricao;
    }
}
class ListaDeTarefas {
    tarefas: Tarefa[] = [{descricao: 'lorem', concluida: false}];
    public adicionarTarefa(descricao:string){
        this.tarefas.push(new Tarefa(descricao, false))
    }
};
/*class ListaPrioritaria extends ListaDeTarefas {
    adicionarTarefaPrioritaria(descricao, prioridade) {

    }

};*/

const lista = new ListaDeTarefas;
//const listaP = new ListaPrioritaria;

console.log(lista.adicionarTarefa('teste'));


