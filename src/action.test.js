/**
 * @jest-environment jsdom
 */
import { addTask, removeItem } from './actions.js';

// add item
describe('Add task to the list', () => {
  const list = [];

  test('add item to list', () => {
    addTask('complete this milestone', list);
    expect(list).toHaveLength(1);
  });
});

// remove item
describe('test remove task function', () => {
  const list = [
    {
      description: 'just another task',
      completed: false,
      index: 1,
    },
  ];

  test('should remove item from task array', () => {
    document.body.innerHTML = '<li>'
    + '<div class ="ul">'
    + '<label><input type="checkbox">'
    + '<input type="text" value = "just another task">'
    + '</label>'
    + '</div>'
    + '</li>';
    const elem = document.querySelector('.ul');
    removeItem(elem, list);
    expect(list).toHaveLength(0);
  });

  test('should remove task from the ul', () => {
    const elts = document.querySelectorAll('.ul');
    expect(elts).toHaveLength(0);
  });
});