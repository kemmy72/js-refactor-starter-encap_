'use strict';

import { logger } from '../../lib/logger.js';

import { todos } from '../app/todos.js';

export const addTodo = () => {
  // read user input
  const addTodoTextInput = document.getElementById('addTodoTextInput');
  const newTodoText = addTodoTextInput.value;
  addTodoTextInput.value = '';

  // update state
  todos.addTodo(newTodoText);

  // render todos & update the UI
  const renderedTodos = todos.render();
  const todosContainer = document.getElementsById('todos-container');
  todosContainer.innerHTML = '';
  todosContainer.appendChild(renderedTodos);

  // log interaction
  logger.add({
    action: 'add todo',
    // ...
  });
};
