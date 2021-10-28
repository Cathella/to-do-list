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
  const form = document.createElement("form");
  form.innerHTML = `
    <input type="text" placeholder="Add to your list ...">
    <input type="submit" value="Submit" hidden>
  `;
  document.getElementById('todo-list').appendChild(form);
};

// function to iterate over the tasks array and populate an HTML list item element for each task
const iterateTasks = (task) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <div>
      <input type="checkbox">
      ${task.description}
    </div>
  `;
  document.getElementById("todo-list").appendChild(li);
}

// clear completed tasks btn
const clearBtn = () => {
  let btn = document.createElement('button');
  btn.innerHTML = 'Clear all completed';
  document.getElementById('todo-list').appendChild(btn);
};

export { iterateTasks, addTitle, taskForm, clearBtn };