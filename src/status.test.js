/**
 * @jest-environment jsdom
 */

import { editTask } from './actions.js';

// updating task's completed status
describe('', () => {

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
describe('', () => {

});