'use strict';

// Getting the previously stored todos from local storage
const getSavedTodos = () => {
    const storedTodosJson = localStorage.getItem('storedTodo');
    try {
        return storedTodosJson ? JSON.parse(storedTodosJson) : [];
    } catch (error) {
        return [];
    }
}

// Render a todo list to screen
const renderTodo = (todos) => {
    const filteredTodo = todos.filter((todoObject) => todoObject.text.toLowerCase().includes(filters.toLowerCase()));

    const incompleteTodos = filteredTodo.filter((object) => !object.completed);

    document.querySelector('#filtered-div').textContent = '';
    generateSummaryDom(incompleteTodos);


    if (todos.length > 0) {

        if (!completeCheck) {
            filteredTodo.forEach((object) => {
                generateTodoDom(object);
            })
        } else {
            incompleteTodos.forEach((object) => {
                generateTodoDom(object);
            })
        }
    } else {
        const p = document.createElement('p');
        p.classList.add('empty-message');
        p.textContent = 'No todos to show';
        document.querySelector('#filtered-div').appendChild(p);
    }
}

// Save new todos to local storage 
const saveTodos = (todos) => {
    localStorage.setItem('storedTodo', JSON.stringify(todo));
}

// Remove a todo on button click
const removeTodo = (id) => {
    const index = todo.findIndex((todoObject) => todoObject.id === id);
    if (index > -1) {
        todo.splice(index, 1);
    }
}

// Update the todos completed by user
const checkTodoCompleted = (id) => {
    const index = todo.findIndex((todoObject) => todoObject.id === id);
    if (index > -1) {
        todo[index].completed = !todo[index].completed;
    }
}

// Generate a todo dom
const generateTodoDom = (object) => {
    // Creating parts of a dom element
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkBox = document.createElement('input');
    const textEl = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup the checkbox
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = object.completed;
    containerEl.appendChild(checkBox);
    checkBox.addEventListener('change', () => {
        checkTodoCompleted(object.id);
        saveTodos(todo);
        renderTodo(todo);
    })

    // Setup the span element
    textEl.textContent = object.text;
    containerEl.appendChild(textEl);

    // Setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    // Setup the remove button
    removeButton.textContent = 'Remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(object.id);
        saveTodos(todo);
        renderTodo(todo);
    });
    document.querySelector('#filtered-div').appendChild(todoEl);
}

// Creating a summary dom
const generateSummaryDom = (incompleteTodos) => {
    const summary = document.createElement('h2');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`;
    document.querySelector('#filtered-div').appendChild(summary);
}
