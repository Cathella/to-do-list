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

export { iterateTasks };