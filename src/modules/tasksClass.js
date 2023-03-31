let checkboxes;
let descriptions;

export default class Tasks {
  tasks = [];

  constructor() {
    this.getFromLocalStorage();
  }

  setLocalStorage = (newTasks) => localStorage.setItem('tasks', JSON.stringify(newTasks));

  getFromLocalStorage = () => {
    if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
  };

  updateTasks = () => {
    this.getFromLocalStorage();
    const temp = this.tasks;
    document.querySelector('.mylist').innerHTML = '';
    this.tasks.forEach((task, i) => {
      task.index = i + 1;
      document.querySelector('.mylist').innerHTML += `<li>
      <div class="task-container list-row">
      <input class="checker" type="checkbox" id="${task.index}">
      <input class="task-description" type="text" name="task-title" id="${task.index}" value="${task.description}"/>
      <div class="icon-container delete task-icon-container" id="${task.index}"></div>
      </div>
    </li>`;
    });
    this.setLocalStorage(this.tasks);

    checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, i) => {
      if (temp[i].completed === true) {
        checkbox.checked = true;
        checkbox.nextSibling.nextSibling.classList.add('marked');
      }
      checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
          checkbox.nextSibling.nextSibling.classList.add('marked');
          temp[i].completed = true;
        } else {
          checkbox.nextSibling.nextSibling.classList.remove('marked');
          temp[i].completed = false;
        }
        this.setLocalStorage(temp);
      });
    });

    descriptions = document.querySelectorAll('.task-description');
    descriptions.forEach((description, i) => {
      description.addEventListener('change', () => {
        temp[i].description = description.value;
        this.setLocalStorage(temp);
      });
    });
  };

  createTask = (e) => {
    e.preventDefault();
    const newTask = {
      description: document.querySelector('#new-task-title').value,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.clear();
    this.setLocalStorage(this.tasks);
    this.updateTasks();
  };

  deleteTask = (i) => {
    const filteredTasks = this.tasks.filter((task) => task !== this.tasks[i]);
    this.setLocalStorage(filteredTasks);
    this.updateTasks();
  };

  clear = () => {
    document.querySelector('#new-task-title').value = '';
  };

  clearAllCompleted = () => {
    const notCompleted = this.tasks.filter((task) => task.completed !== true);
    this.setLocalStorage(notCompleted);
    this.updateTasks();
  }
}