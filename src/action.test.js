/**
 * @jest-environment jsdom
 */
import { addTask, removeTask } from './actions.js';

// add item
describe('Add task to the list', () => {
  const list = [];

  test('add item to list', () => {
    addTask('complete this milestone', list);
    expect(list).toHaveLength(1);
  });
  test('should remove task from array', () => {
    const lengthBeforeRemove = Number(JSON.parse(localStorage.getItem('tasks')).length);
    removeTask(1);
    const lengthAfterRemove = Number(JSON.parse(localStorage.getItem('tasks')).length);
    expect(lengthAfterRemove).toBe(lengthBeforeRemove - 1);
  });
});