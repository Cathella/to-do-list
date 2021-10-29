const getTasks = () => {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  return tasks;
};


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

    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  // if (tasks[checkBox.id].completed === true) {
  //   desc.classList.add('line-through');
  // }
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