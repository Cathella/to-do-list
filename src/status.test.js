/**
 * @jest-environment jsdom
 */

import { editTask, allCompletedTasks, checkStatus } from './actions.js';

// updating task's completed status
describe('Should check completed status of the task', () => {
  const list = [
    { description: 'This is a task', completed: false, index: 1, },
  ];
  const [task] = list;
  document.body.innerHTML = '<input type="checkbox" class="checked-box" checked>'
    + '<input type="checkbox" class="checked-box">';
  const elems = document.querySelectorAll('.checked-box');

  test('should mark task as completed', () => {
    checkStatus(elems[0], task);
    expect(task.completed).toBeTruthy();
  });

  test('should mark task as not completed', () => {
    checkStatus(elems[1], task);
    expect(task.completed).toBeFalsy();
  });
});

// editing a task
describe('Should edit a task', () => {
    test('should edit task from previous task to new task', () => {
        const list = [
          {
            description: 'This is a task',
            completed: false,
            index: 1,
          },
        ];
        const [task] = list;
        const newTask = 'This is a modified task';
        editTask(newTask, task, list);
        expect(task.description).toMatch('This is a modified task');
      });
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