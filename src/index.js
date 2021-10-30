import './style.css';

import {
  displayTasks, addTask, addTaskToList, getTasks, addListeners, deleteCompletedTasks,
} from './status.js';

class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

window.onload = () => {
  displayTasks();
  addListeners();
};

// add task event
const input = document.querySelector('#input-task');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      taskFunctions.addElement(ul, false, input.value);
      input.value = '';
    }
  }
});
// document.getElementById('form').addEventListener('submit', (e) => {
//   e.preventDefault();

//   const tasks = getTasks();
//   const description = document.getElementById('description').value;
//   const completed = false;
//   const index = tasks.length;

//   const task = new Task(index, description, completed);
//   addTaskToList(task);
//   addTask(task);

//   e.target.reset();
//   return false;
// });

const clearButton = document.getElementById('clear-tasks');
clearButton.addEventListener('click', () => {
  deleteCompletedTasks(ul);
});

