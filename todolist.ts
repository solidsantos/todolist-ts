class Tarefa {
    descricao: string;
    concluida: boolean;
    constructor(descricao: string, concluida: boolean) {
        this.descricao = descricao;
        this.concluida = concluida;
    };

    /*public set setConcluida(concluida: boolean) {
        this.concluida = concluida;
    }

    public get getDescricao(): string {
        return this.concluida ? this.descricao + ' (Concluída)' : this.descricao + ' (Pendente)';
    }
    public set setDescricao(descricao: string){
        this.descricao = descricao;
    }*/
}
class ListaDeTarefas {
    tarefas: Tarefa[] = [];
    public adicionarTarefa(descricao:string){
        this.tarefas.push({
            descricao: descricao,
            concluida: false,
        });
    }
};
/*class ListaPrioritaria extends ListaDeTarefas {
    adicionarTarefaPrioritaria(descricao, prioridade) {

    }

};*/

const lista = new ListaDeTarefas;
//const listaP = new ListaPrioritaria;
lista.adicionarTarefa('teste');
lista.adicionarTarefa('teste2');

console.log(lista);


