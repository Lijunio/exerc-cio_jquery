$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        const taskText = $('#task-input').val();

        if (taskText.trim() !== '') {
            const newTask = $('<li></li>').text(taskText);
            $('#task-list').append(newTask);
            $('#task-input').val('');
        }
    });
    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
