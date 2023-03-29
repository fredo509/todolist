import './style.css';
import printMe from './print.js';

const myList = [{
  description: 'test',
  completed: true,
  index: 0,
}];

const showList = () => {
  const html = `
    <main id="toDo">
        <div class="title">
            <h3>Today's To Do</h3>
            <button class="btn-refresh"><img src="../images/refresh.png" alt="refresh img"></button>
        </div>
        <div class="WriteList">
            <input type="text" class="write" placeholder="Add to your list">
        </div>
        <div class="WriteList">
            <div class="WriteList">
                <input type="checkbox" class="selectList">
                <input type="text" class="write" id="inputRead" value = ${myList[0].description} readonly>
            </div>
            <div class="treeDot">
                <p>:</p>
            </div>
        </div>
         <button class="btn-refresh clean">Clean all completed </button>
    </main>
    `;
  document.body.innerHTML = html;
};

printMe();

document.body.onload = showList();