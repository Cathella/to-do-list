/**
 * @jest-environment jsdom
 */

import { editTask, removeCompleted } from './actions.js';

// updating task's completed status
describe('', () => {

});

// editing a task
describe('Should edit a task', () => {
  
});

// clear all completed tasks
describe('Should remove all completed tasks', () => {
  let tasks = [
    { description: 'coding challenge', completed: false, index: 1, },
    { description: 'do my daily workout', completed: true, index: 2, },
    { description: 'visit my parents', completed: false, index: 3, },
  ];

  const notCompletedTask = {
    desc: 'coding challenge',
    completed: false,
    index: 1,
  };

  test('save only not completed items', () => {
    removeCompleted(tasks);
    tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toContainEqual(notCompletedTask);
  });
});