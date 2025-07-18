/*
Lista de tarefas
[x]Saber quando o botão foi clicado
[x]Pegar o texta dentro do Input
[x]Colocar esse texto na tela
[] Salva na memoria
 */

function adicionarTarefa() {
    let tarefa = document.getElementById('novaTarefa').value
    if (tarefa === '') {
        alert("Digite uma task")
    } else {
        let lista = document.createElement('li')

        lista.innerHTML = tarefa + '<button onclick = "deleteTarefa(this)">Delete</button>'
        document.getElementById('lista-tarefas').appendChild(lista)
        document.getElementById('novaTarefa').value = ''
        console.log(lista)
    }
}


function deleteTarefa(lista) {
    lista.parentElement.remove()
}

