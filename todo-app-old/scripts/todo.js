    'use strict';

    const todo = getSavedTodos(); //assigning the previously stored values
    let filters = '',
        completeCheck = false;

    renderTodo(todo); // To render the todo list on page load

    // Updating the filter input on screen and filters variable 
    document.querySelector('#filter-input').addEventListener('input', (e) => {
        filters = e.target.value;
        renderTodo(todo);
    });

    // Adding a new todo
    document.querySelector('#form-id').addEventListener('submit', (e) => {
        const text = e.target.elements.todoName.value.trim()
        e.preventDefault();
        if (text.length > 0) {
            const newObject = {
                id: uuidv4(),
                text, //text: text(es6)  if name and value have same name it is es6 shortcut
                completed: false
            };
            todo.push(newObject);
            saveTodos(todo);
            e.target.elements.todoName.value = '';
            renderTodo(todo);
        }
    })

    // To show or hide completed tasks using checkbox
    document.querySelector('#check-id').addEventListener('change', (e) => {
        completeCheck = e.target.checked;
        renderTodo(todo);
    })