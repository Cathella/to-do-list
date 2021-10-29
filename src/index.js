import './style.css';

// import tasks from './tasks.js';
import {
  clearBtn,
} from './app.js';
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
  displayTasks(); // list tasks
  clearBtn(); // complete tasks button
};

// add task event
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const tasks = getTasks();
  const description = document.getElementById('description').value;
  const completed = false;
  const index = tasks.length + 1;

  const task = new Task(index, description, completed);
  addTaskToList(task);
  addTask(task);

  e.target.reset();
  return false;
});