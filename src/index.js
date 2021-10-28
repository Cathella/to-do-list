import './style.css';

const tasks = [
  {
    description: "complete project - list structure",
    completed: false,
    index: 0,
  },
  {
    description: "create a project pull request",
    completed: false,
    index: 1,
  },
  {
    description: "submit project link for review",
    completed: false,
    index: 2,
  }
];

// function to iterate over the tasks array and populate an HTML list item element for each task
const iterateTasks = (task) => {
  let li = document.createElement("li");
  li.innerHTML = `${task.description}`;
  document.getElementById("todo-list").appendChild(li);
}

// load render the dynamically created list of tasks in the dedicated placeholder
tasks.forEach(iterateTasks);

