const getTasks = () => {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  return tasks;
};

const addTaskToList = (task) => {
  const todo = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <input type="checkbox">
      ${task.description}
    </div>
  `;
  todo.appendChild(li);
};

const displayTasks = () => {
  const tasks = getTasks();
  tasks.forEach((task) => addTaskToList(task));

  console.log("tasks");
};

const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completedTask = (task) => {
  
}

export {
  displayTasks, addTask, addTaskToList, getTasks,
};