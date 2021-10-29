// task heading
const addTitle = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <h3>Today's To Do</h3>
  `;
  document.getElementById('todo-list').appendChild(header);
};

// task form
const taskForm = () => {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" placeholder="Add to your list ..." id="description">
    <input type="submit" value="Submit" hidden>
  `;
  form.setAttribute('id', 'todo-form');
  document.getElementById('todo-list').appendChild(form);
};

// clear completed tasks btn
const clearBtn = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'Clear all completed';
  document.getElementById('todo-list').appendChild(btn);
};

export {
  addTitle, taskForm, clearBtn,
};