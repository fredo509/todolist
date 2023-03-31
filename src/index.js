import './style.css';
import Tasks from './modules/tasksClass.js';

const newTaskDescription = document.querySelector('#new-task-title');
const enter = document.querySelector('#enter-btn');
const container = document.querySelector('.mylist');
const clearBtn = document.querySelector('.clear-button');

const task = new Tasks();

document.addEventListener('DOMContentLoaded', () => {
  task.updateTasks();
});

newTaskDescription.addEventListener('keydown', (e) => {
  if (newTaskDescription.value.length > 0 && e.code === 'Enter') {
    e.preventDefault();
    task.createTask(e);
  }
});

enter.addEventListener('click', task.createTask);

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const targetId = +e.target.getAttribute('id');
    task.deleteTask(targetId - 1);
  }
});

container.addEventListener('focusin', (e) => {
  e.target.classList.add('yellow-bkg');
  e.target.parentNode.classList.add('yellow-bkg');
});

container.addEventListener('focusout', (e) => {
  e.target.classList.remove('yellow-bkg');
  e.target.parentNode.classList.remove('yellow-bkg');
});

clearBtn.addEventListener('click', () => {
  task.clearAllCompleted();
});
