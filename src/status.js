const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};

const addTaskToList = (task) => {
  const tasks = getTasks();
  const todo = document.getElementById('todo-list');
  const li = document.createElement('li');
  const desc = document.createElement('span');
  const checkBox = document.createElement('input');
  const ellipsis = document.createElement('i');

  ellipsis.classList.add('fa-ellipsis-v', 'fas', 'float-right');
  checkBox.type = 'checkbox';
  checkBox.checked = task.completed;
  checkBox.classList.add('checks');
  checkBox.id = task.index;

  desc.innerHTML = task.description;
  li.classList.add('tasks');
  li.id = task.index;

  li.appendChild(checkBox);
  li.appendChild(desc);
  li.appendChild(ellipsis);

  todo.appendChild(li);
};

const changeStatus = () => {
  if (checkBox.checked) {
    tasks[checkBox.id].completed = true;
  } else {
    tasks[checkBox.id].completed = false;
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const checkStatus = () => {
  if (JSON.parse(window.localStorage.getItem('tasks'))) {
    tasks = getTasks();
    tasks.forEach((task) => {
      const checkBox = document.getElementById(task.index);
      checkBox.checked = task.completed;
      changeStatus(checkBox);
    });
  } else {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

const addListeners = () => {
  const checks = document.querySelectorAll('.checks');
  checks.forEach((check) => {
    check.addEventListener('change', () => changeStatus(check));
    checkStatus();
  });
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