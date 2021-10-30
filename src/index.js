import './style.css';
import {
  addTask, getTasks, removeCompletedTasks,
} from './status.js';

const list = document.getElementById('todo-list');
const ul = document.createElement('ul');
ul.classList.add('item-list');
list.append(ul);

window.onload = () => {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    getTasks(ul);
  }
};

// add task event
const input = document.querySelector('#input-task');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      addTask(ul, false, input.value);
      input.value = '';
    }
  }
});

// clear completed tasks - event
const clearButton = document.getElementById('clear-tasks');
clearButton.addEventListener('click', () => {
  removeCompletedTasks(ul);
});