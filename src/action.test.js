/**
 * @jest-environment jsdom
 */

const actions = require('./actions');

// add item
test ('Add a task to the list', () => {
  document.body.innerHTML = 
  '<div>' +
  ' <ul id="list"></li>' +
  '</div>';
  actions.addTaskToList();
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});
// delete item