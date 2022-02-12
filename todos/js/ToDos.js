import ls from "./ls.js";
import utilities from "./utilities.js";

const inputValue = document.querySelector("#task");
const adds = document.querySelector("#adds");
const toDo = document.querySelector(".list");

let tasks = [];

inputValue.onkeydown = press;

const listInStorage = ls.getTodoList();
console.log(listInStorage);

if (listInStorage !== []) {
  tasks = listInStorage;
  tasks.forEach((element) => {
    addTask(element);
    markCompleted(element);
  });
  takeAfterCreation();
}

function markCompleted(element) {
  const tasksCreated = document.querySelectorAll(".newTask");

  tasksCreated.forEach((task) => {
    if (task.outerText === element.content && element.completed === true) {
      task.classList.toggle("strike");
      task.firstChild.checked = true;
    }
  });
}

adds.addEventListener("click", () => {
  if (inputValue.value === "") {
    return;
  } else {
    const theTask = makeTask();
    addTask(theTask);
    tasks.push(theTask);
    console.log(tasks);
    ls.setTodoList(tasks);
    takeAfterCreation();
    inputValue.value = "";
    inputValue.focus();
  }
});

function press(event) {
  if (inputValue.value === "") {
    return;
  } else if (event.key === "Enter") {
    const theTask = makeTask();
    addTask(theTask);
    tasks.push(theTask);
    console.log(tasks);
    ls.setTodoList(tasks);
    takeAfterCreation();
    inputValue.value = "";
    inputValue.focus();
  }
}

function makeTask() {
  const task = {};

  task.id = Date.now();
  task.content = inputValue.value;
  task.completed = false;

  return task;
}

function addTask(task) {
  const newTask = document.createElement("div");
  newTask.setAttribute("class", "newTask");

  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  checkBtn.setAttribute("class", "checkbox");

  const content = document.createElement("div");
  content.setAttribute("class", "content");

  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "./images/close.png");
  imgClose.setAttribute("class", "close");

  content.textContent = task.content;

  newTask.appendChild(checkBtn);
  newTask.appendChild(content);
  newTask.appendChild(imgClose);

  toDo.appendChild(newTask);
}

function removeElement(e) {
  const element = e.path[1];
  toDo.removeChild(element);
  tasks.forEach((task) => {
    if (task.content === element.textContent) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  ls.setTodoList(tasks);
}

function completesItem(e) {
  const element = e.path[1];
  tasks.forEach((task) => {
    if (task.content === element.textContent) {
      if (task.completed) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }
  });
  element.classList.toggle("strike");

  ls.setTodoList(tasks);
}

function takeAfterCreation() {
  const close = document.querySelectorAll(".close");
  const checkBtn = document.querySelectorAll(".checkbox");
  checkBtn.forEach((check) => (check.onclick = completesItem));
  close.forEach((element) => (element.onclick = removeElement));
}

function applyFilter(filterList) {
  toDo.innerHTML = "";
  filterList.forEach((todo) => {
    addTask(todo);
    markCompleted(todo);
  });
}

document.querySelector(".all").addEventListener("click", () => {
  const newArrayToDo = utilities.multiFilter(tasks, "all");
  applyFilter(newArrayToDo);
  takeAfterCreation();
});

document.querySelector(".active").addEventListener("click", () => {
  const newArrayToDo = utilities.multiFilter(tasks, "active");
  applyFilter(newArrayToDo);
  takeAfterCreation();
});

document.querySelector(".completed").addEventListener("click", () => {
  const newArrayToDo = utilities.multiFilter(tasks, "completed");
  applyFilter(newArrayToDo);
  takeAfterCreation();
});
