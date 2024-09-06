$(document).ready(function() {
    // Função para adicionar a tarefa
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário

        // Pega o valor do input
        const taskText = $('#task-input').val();

        // Verifica se o input não está vazio
        if (taskText.trim() !== '') {
            // Cria um novo item <li> com o texto da tarefa
            const newTask = $('<li></li>').text(taskText);

            // Adiciona o item na lista
            $('#task-list').append(newTask);

            // Limpa o campo de input após adicionar a tarefa
            $('#task-input').val('');
        }
    });

    // Evento para riscar a tarefa ao clicar nela
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
