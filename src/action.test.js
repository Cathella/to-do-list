import { addTask, removeTask } from './actions';

// add item
describe('Add task to the list', () => {
  const list = [];

  test('add item to list', () => {
    addTask('complete this milestone', list);
    expect(list).toHaveLength(1);
  });
});

// delete item
describe('Delete task form the list', () => {

  test('should remove task from array', () => {

  });
});