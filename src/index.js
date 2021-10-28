import _ from 'lodash';
import './style.css';

import tasks from './tasks.js';
import {
  iterateTasks, addTitle, taskForm, clearBtn
} from './app.js';

window.onload = () => {
  addTitle(); // tasks title
  taskForm(); // task form
  tasks.forEach(iterateTasks); // list tasks
  clearBtn(); // complete tasks button
};