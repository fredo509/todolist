export default class tasks {
  constructor() {
    // ------------------------------------------ VARIABLES
    this.taskList = [];
    this.taskDesc = document.getElementById('title');
    this.submit = document.getElementById('form');

    this.displayTask();

    // ------------------------------------------- EVENTS

    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const index = e.target.dataset.id;
        this.removeBook(index);
      }
    });
  }

  // ------------------------ FUNCTIONS

  addBook() {
    const input = this.input.value;
    const taskdes = this.value;
    this.taskList.push({ title, author });
    localStorage.setItem('collection', JSON.stringify(this.collection));
    this.displayBooks();
    this.title.value = '';
    this.author.value = '';
  }

  displayBooks() {
    this.container.innerHTML = '';
    this.collection.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'book';
      const textContent = document.createElement('p');
      textContent.className = 'fs-bold m-0 input-txt';
      textContent.textContent = `${element.title} by ${element.author}`;
      const button = document.createElement('button');
      button.textContent = 'remove';
      button.className = 'remove';
      button.setAttribute('data-id', `${index}`);
      div.append(textContent, button);
      this.container.appendChild(div);
    });
  }

  removeBook(index) {
    this.collection.splice(index, 1);
    localStorage.setItem('collection', JSON.stringify(this.collection));
    this.displayBooks();
  }
}
