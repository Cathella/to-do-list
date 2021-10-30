let list = [];

const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(list));
};

const reshuffleIndex = () => {
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }
};

const removeTask = (index) => {
  list = list.filter((e) => e.index !== parseInt(index, 10));
  reshuffleIndex();
  saveTasks();
};

const checkboxStatus = (task) => task.checked;

const addTaskToList = (ul, index, completed, description) => {
  // const tasks = getTasks();
  // const todo = document.getElementById('todo-list');
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  // const ellipsis = document.createElement('i');

  // ellipsis.classList.add('fa-ellipsis-v', 'fas', 'float-right');
  checkBox.type = 'checkbox';
  checkBox.id = index;
  checkBox.checked = completed;
  // checkBox.checked = task.completed;
  // checkBox.classList.add('checks');
  // checkBox.id = task.index;

  checkBox.addEventListener('change', () => {
    if (checkboxStatus(checkBox)) {
      list[parseInt(checkBox.id, 10)].completed = true;
    } else {
      list[parseInt(checkBox.id, 10)].completed = false;
    }
    saveTasks();
  });

  const desc = document.createElement('span');
  desc.contentEditable = true;
  desc.innerHTML = description;
  desc.addEventListener('focus', () => {
    desc.parentNode.style.backgroundColor = 'lightyellow';
    desc.parentNode.childNodes[2].style.pointerEvents = 'initial';
    desc.parentNode.childNodes[2].childNodes[0].style.display = 'none';
    desc.parentNode.childNodes[2].childNodes[2].style.display = 'initial';
  });

  desc.addEventListener('focusout', (e) => {
    desc.parentNode.style.backgroundColor = 'initial';
    desc.parentNode.childNodes[2].childNodes[0].style.display = 'initial';
    desc.parentNode.childNodes[2].childNodes[2].style.display = 'none';
    list[parseInt(checkBox.id, 10)].description = e.composedPath()[0].innerText;
    saveTasks();
    setTimeout(() => {
      desc.parentNode.childNodes[2].style.pointerEvents = 'none';
    }, 500);
  });

  const elBtn = document.createElement('button');
  elBtn.className = 'element-button';
  elBtn.addEventListener('click', (e) => {
    removeTask(e.currentTarget.parentNode.childNodes[0].id);
    e.target.closest('li').remove();
  }, false);

  const icon = document.createElement('i');
  icon.className = 'fas fa-ellipsis-v';
  const icon2 = document.createElement('i');
  icon2.className = 'fas fa-trash';
  elBtn.append(icon, icon2);

  item.append(checkBox, desc, elBtn);
  ul.prepend(li);

  // li.classList.add('tasks');
  // li.id = task.index;

  // li.appendChild(checkBox);
  // li.appendChild(desc);
  // li.appendChild(ellipsis);

  // todo.appendChild(li);
};

// const changeStatus = () => {
//   if (checkBox.checked) {
//     tasks[checkBox.id].completed = true;
//   } else {
//     tasks[checkBox.id].completed = false;
//   }

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// };

// const checkStatus = () => {
//   if (JSON.parse(window.localStorage.getItem('tasks'))) {
//     tasks = JSON.parse(window.localStorage.getItem('tasks'));
//     tasks.forEach((task) => {
//       const checkBox = document.getElementById(task.index);
//       checkBox.checked = task.completed;
//       changeStatus(checkBox);
//     });
//   } else {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// };

// const addListeners = () => {
//   const checks = document.querySelectorAll('.checks');
//   checks.forEach((check) => {
//     check.addEventListener('change', () => changeStatus(check));
//     checkStatus();
//   });
// };

// const displayTasks = () => {
//   const tasks = getTasks();
//   tasks.forEach((task) => addTaskToList(task));
// };

const addTask = (ul, completed, description) => {
  list.push(new Task(list.length, completed, description));
  addTaskToList(ul, taskList.length - 1, completed, description);
  saveTasks();
};

const removeCompletedTasks = (ul) => {
  list = list.filter((e) => e.completed !== true);
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  reshuffleIndex();
  list.forEach((task) => {
    addTaskToList(ul, task.index, task.completed, task.description);
  });
  saveTasks();
};

export {
  displayTasks, addTask, addTaskToList, getTasks, addListeners, removeCompletedTasks,
};