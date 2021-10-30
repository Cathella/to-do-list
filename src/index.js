import './style.css';

import {
  displayTasks, addTask, addTaskToList, getTasks,
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
};

// add task event
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const tasks = getTasks();
  const description = document.getElementById('description').value;
  const completed = false;
  const index = tasks.length;

  const task = new Task(index, description, completed);
  addTaskToList(task);
  addTask(task);

  e.target.reset();
  return false;
});

