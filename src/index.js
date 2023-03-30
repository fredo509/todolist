import './style.css';
import printMe from './print.js';
import showList from './modules/Loadpage.js';
import myList from './modules/object.js';

document.body.onload = showList();

let html = '';
const listItem = document.getElementById('listItem');

myList.forEach((element, index) => {
  element = index;
  html += `<div class="WriteList">
                <input type="checkbox" class="selectList">
                <input type="text" class="write" id="inputRead" value ="${myList[index].description}" readonly>
                <p>:</p>
            </div>`;

  listItem.innerHTML = html;
});

printMe();
