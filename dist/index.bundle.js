"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tasksClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasksClass.js */ "./src/modules/tasksClass.js");
// import './style.css';


const newTaskDescription = document.querySelector('#new-task-title');
const enter = document.querySelector('#enter-btn');
const container = document.querySelector('.mylist');
const clearBtn = document.querySelector('.clear-button');

const task = new _modules_tasksClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

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


/***/ }),

/***/ "./src/modules/tasksClass.js":
/*!***********************************!*\
  !*** ./src/modules/tasksClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
let checkboxes;
let descriptions;

class Tasks {
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
    document.querySelector('.mylist').innerHTML = ' ';
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
    document.querySelector('#new-task-title').value = ' ';
  };

  clearAllCompleted = () => {
    const notCompleted = this.tasks.filter((task) => task.completed !== true);
    this.setLocalStorage(notCompleted);
    this.updateTasks();
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw4REFBSzs7QUFFdEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlELDBFQUEwRSxXQUFXLFdBQVcsaUJBQWlCO0FBQ2pILG1FQUFtRSxXQUFXO0FBQzlFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrc0NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2tzIGZyb20gJy4vbW9kdWxlcy90YXNrc0NsYXNzLmpzJztcblxuY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLXRpdGxlJyk7XG5jb25zdCBlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbnRlci1idG4nKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teWxpc3QnKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuXG5jb25zdCB0YXNrID0gbmV3IFRhc2tzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHRhc2sudXBkYXRlVGFza3MoKTtcbn0pO1xuXG5uZXdUYXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUubGVuZ3RoID4gMCAmJiBlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay5jcmVhdGVUYXNrKGUpO1xuICB9XG59KTtcblxuZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrLmNyZWF0ZVRhc2spO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgIGNvbnN0IHRhcmdldElkID0gK2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICB0YXNrLmRlbGV0ZVRhc2sodGFyZ2V0SWQgLSAxKTtcbiAgfVxufSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGUpID0+IHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgneWVsbG93LWJrZycpO1xuICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3llbGxvdy1ia2cnKTtcbn0pO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZSkgPT4ge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3ctYmtnJyk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgneWVsbG93LWJrZycpO1xufSk7XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrLmNsZWFyQWxsQ29tcGxldGVkKCk7XG59KTtcbiIsImxldCBjaGVja2JveGVzO1xubGV0IGRlc2NyaXB0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3Mge1xuICB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgc2V0TG9jYWxTdG9yYWdlID0gKG5ld1Rhc2tzKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrcykpO1xuXG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH07XG5cbiAgdXBkYXRlVGFza3MgPSAoKSA9PiB7XG4gICAgdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMudGFza3M7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15bGlzdCcpLmlubmVySFRNTCA9ICcgJztcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpICsgMTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teWxpc3QnKS5pbm5lckhUTUwgKz0gYDxsaT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lciBsaXN0LXJvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tlclwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHt0YXNrLmluZGV4fVwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1kZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stdGl0bGVcIiBpZD1cIiR7dGFzay5pbmRleH1cIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIi8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXIgZGVsZXRlIHRhc2staWNvbi1jb250YWluZXJcIiBpZD1cIiR7dGFzay5pbmRleH1cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+YDtcbiAgICB9KTtcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh0aGlzLnRhc2tzKTtcblxuICAgIGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGkpID0+IHtcbiAgICAgIGlmICh0ZW1wW2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tib3gubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnbWFya2VkJyk7XG4gICAgICB9XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgY2hlY2tib3gubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnbWFya2VkJyk7XG4gICAgICAgICAgdGVtcFtpXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrYm94Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmtlZCcpO1xuICAgICAgICAgIHRlbXBbaV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodGVtcCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25zLmZvckVhY2goKGRlc2NyaXB0aW9uLCBpKSA9PiB7XG4gICAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRlbXBbaV0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodGVtcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVUYXNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stdGl0bGUnKS52YWx1ZSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBpbmRleDogdGhpcy50YXNrcy5sZW5ndGggKyAxLFxuICAgIH07XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh0aGlzLnRhc2tzKTtcbiAgICB0aGlzLnVwZGF0ZVRhc2tzKCk7XG4gIH07XG5cbiAgZGVsZXRlVGFzayA9IChpKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSB0aGlzLnRhc2tzW2ldKTtcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZShmaWx0ZXJlZFRhc2tzKTtcbiAgICB0aGlzLnVwZGF0ZVRhc2tzKCk7XG4gIH07XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLXRpdGxlJykudmFsdWUgPSAnICc7XG4gIH07XG5cbiAgY2xlYXJBbGxDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90Q29tcGxldGVkID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkICE9PSB0cnVlKTtcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZShub3RDb21wbGV0ZWQpO1xuICAgIHRoaXMudXBkYXRlVGFza3MoKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==