import './style.css';

import tasks from './tasks';
import { iterateTasks } from './app';

// load render the dynamically created list of tasks in the dedicated placeholder
tasks.forEach(iterateTasks); 
