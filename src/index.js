import './style.css';

import tasks from './tasks';
import { iterateTasks } from './app';

// load render the dynamically created list of tasks in the dedicated placeholder
let header = document.createElement("header");
header.innerHTML = `
  <h3>Today's To Do</h3>
`;
document.getElementById("tasks").appendChild(header);

let form = document.createElement("form");
form.innerHTML = `
  <input type="text" placeholder="Add to your list ...">
  <input type="submit" value="Submit" hidden>
`;
document.getElementById("tasks").appendChild(form);

tasks.forEach(iterateTasks);

let btn = document.createElement("button");
btn.innerHTML = `Clear all completed`;
document.getElementById("tasks").appendChild(btn); 
