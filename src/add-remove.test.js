/**
 * @jest-environment jsdom
 */

import e from './__mocks__/e.js';
import Tasks from './modules/tasksClass.js';

document.body.innerHTML = `<div class="list-container">
    <div class="list-header list-row">
      <h3 class="list-title">Today's To Do</h3>
      <div class="icon-container update-icon-container"></div>
    </div>
    <div class="input-field-container list-row">
      <input class="input-field" type="text" name="new-task-title" id="new-task-title" placeholder="Add to your list..."/>
      <div class="icon-container enter-icon-container" id="enter-btn"></div>
    </div>
    <ul class="mylist"></ul>
    <div class="clear-button-container list-row">
      <button class="clear-button" type="button">Clear All Completed</button>
    </div>
  </div>`;

describe('test add and remove task element from DOM', () => {
  const task = new Tasks();

  test('add task element to DOM', () => {
    task.createTask(e);
    const list = document.querySelectorAll('.mylist li');
    expect(list).toHaveLength(1);
  });

  test('delete task element from DOM', () => {
    task.deleteTask(0);
    const list = document.querySelectorAll('.mylist li');
    expect(list).toHaveLength(0);
  });
});