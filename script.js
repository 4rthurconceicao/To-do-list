function adicionarTarefa () {
    // Pega o input
    const input = document.getElementById('nova-tarefa');
    const texto = input.ariaValueMax.trim(); // Remove espaços antes e depois

    // verifica
    if(texto === '')return;

    const lista = document.getElementById('lista-tarefas');
    
    const item = document.createElement('li');
    item.textoContent = texto;

    item.onclick = function(){
        item.classList.toggle('done');
    }

    item.ondbclick = function (){
        item.remove();
    }

    lista.appendChild(item);

    input.value = '';
}