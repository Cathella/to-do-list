import tasks from './tasks.js';

const getTasks = () => {
  let todos = tasks;

  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify(todos));
  } else {
    todos = JSON.parse(localStorage.tasks);
  }

  return tasks;
};

const saveTasks = () => {
  let todos = tasks;

  localStorage.setItem('tasks', JSON.stringify(todos));
}

const checkStatus = (task) => task.checked;

const addTaskToList = (task) => {
  const tasks = getTasks();
  const todo = document.getElementById('todo-list');
  const li = document.createElement('li');
  const desc = document.createElement('span');
  const checkBox = document.createElement('input');

  checkBox.type = 'checkbox';
  checkBox.checked = task.completed;
  checkBox.classList.add('check-box');
  checkBox.id = task.index;

  desc.innerHTML = task.description;
  li.classList.add('list-item');
  li.id = task.index;

  li.appendChild(checkBox);
  li.appendChild(desc);

  todo.appendChild(li);

  checkBox.addEventListener('change', () => {
    if (checkStatus(checkBox)) {
      tasks[checkBox.id].completed = true;
    } else {
      tasks[checkBox.id].completed = false;
    }

    saveTasks();
  });

  if (tasks[checkBox.id].completed == true) {
    desc.classList.add('line-through');
  }
};

const displayTasks = () => {
  const tasks = getTasks();
  tasks.forEach((task) => addTaskToList(task));
};

const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  displayTasks, addTask, addTaskToList, getTasks,
};