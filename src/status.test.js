/**
 * @jest-environment jsdom
 */

import { editTask, allCompletedTasks } from './actions.js';

// updating task's completed status
describe('', () => {

});

// editing a task
describe('Should edit a task', () => {
  
});

// clear all completed tasks
describe('Should remove all completed tasks', () => {
  let tasks = [
    { description: 'This is task One', completed: false, index: 1, },
    { description: 'This is task Two', completed: true, index: 2, },
    { description: 'This is task Three', completed: false, index: 3, },
  ];

  const notCompletedTask = {
    description: 'This is task One',
    completed: false,
    index: 1,
  };

  test('Save tasks with status not completed', () => {
    allCompletedTasks(tasks);
    tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toContainEqual(notCompletedTask);
  });
});