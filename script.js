const lista = document.querySelector('ul');
const input_tarefa = document.querySelector('input');
const botao_adiconar_tarefa = document.querySelector('button');

const tarefas = [];

function mostrar_tarefas() {
    lista.innerHTML = '';
    for (tarefa of tarefas) {
        const nova_tarefa = document.createElement('li');
        const texto_tarefa = document.createTextNode(tarefa);

        const botao_excluir = document.createElement('a');
        botao_excluir.innerHTML = 'X';
        const posicao = tarefas.indexOf(tarefa);

        botao_excluir.setAttribute('onclick', `deletar_tarefa(${posicao})`);
        
        nova_tarefa.appendChild(texto_tarefa);
        lista.appendChild(nova_tarefa);
        nova_tarefa.appendChild(botao_excluir);
    }
};

function adicionar_tarefa() {
    if (input_tarefa.value == '') {
        window.alert('Adicione um texto');
    }
    else {
        const texto_tarefa = input_tarefa.value;
        tarefas.push(texto_tarefa);
        mostrar_tarefas();
        input_tarefa.value = '';
    };
};

function deletar_tarefa(posicao) {
    tarefas.splice(posicao, 1);
    mostrar_tarefas();
}

botao_adiconar_tarefa.setAttribute('onclick', 'adicionar_tarefa()');