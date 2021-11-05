// contains task todo options

class Task {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

let list = [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(list));
};

const reshuffleIndex = () => {
  for (let i = 1; i < list.length; i += 1) {
    list[i].index = i;
  }
};

const removeTask = (index) => {
  list = list.filter((e) => e.index !== parseInt(index, 10));
  reshuffleIndex();
  saveTasks();
};

const removeItem = (elem, tasks) => {
  const text = elem.children[0].children[1].value;
  tasks.forEach((task) => {
    if (task.description === text) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  elem.parentElement.remove();
};

const checkboxStatus = (task) => task.checked;

const addTaskToList = (ul, index, completed, description) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = index;
  checkBox.checked = completed;

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
    desc.parentNode.parentNode.style.backgroundColor = 'lightyellow';
    desc.parentNode.parentNode.childNodes[1].style.pointerEvents = 'initial';
  });

  desc.addEventListener('focusout', (e) => {
    desc.parentNode.parentNode.style.backgroundColor = 'initial';
    list[parseInt(checkBox.id, 10)].desc = e.composedPath()[0].innerText;
    saveTasks();
    setTimeout(() => {
      desc.parentNode.childNodes[2].style.pointerEvents = 'none';
    }, 500);
  });

  const elBtn = document.createElement('button');
  elBtn.className = 'element-button';
  elBtn.addEventListener('click', (e) => {
    removeTask(e.currentTarget.parentNode.childNodes[0].childNodes[0].id);
    e.target.closest('li').remove();
  }, false);

  const icon = document.createElement('i');
  icon.className = 'fas fa-ellipsis-v';
  const icon2 = document.createElement('i');
  icon2.className = 'fas fa-trash';
  elBtn.append(icon2);

  const div = document.createElement('div');
  div.append(checkBox, desc);

  li.append(div, elBtn);
  ul.prepend(li);
};

const getTasks = (ul) => {
  list = JSON.parse(localStorage.tasks);
  list.forEach((task) => {
    addTaskToList(ul, task.index, task.completed, task.description);
  });
};

const addTask = (list, task) => {
  task.push({ desc: list, completed: false, index: task.length + 1 });
  localStorage.setItem('tasks', JSON.stringify(task));
};

const createTask = (ul, completed, description) => {
  list.push(new Task(list.length + 1, description, completed));
  addTaskToList(ul, list.length, completed, description);
  localStorage.setItem('tasks', JSON.stringify(list));
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
  createTask, getTasks, removeCompletedTasks, addTask, removeTask, saveTasks, removeItem,
};