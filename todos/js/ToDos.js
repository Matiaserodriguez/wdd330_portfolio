const inputValue = document.querySelector("#task");
const adds = document.querySelector("#adds");
const toDo = document.querySelector(".list");

adds.addEventListener("click", () => {
  const theTask = makeTask();
  addTask(theTask);
  inputValue.value = "";
  inputValue.focus();
});

function pulsar(event) {
  if (event.key === "Enter") {
    const theTask = makeTask();
    addTask(theTask);
    inputValue.value = "";
  }
}

function makeTask() {
  const task = {};

  task.name = inputValue.value;
  task.active = true;
  task.completed = false;

  console.log(task);
  return task;
}

function addTask(task) {
  const newTask = document.createElement("div");
  newTask.textContent = task.name;
  toDo.appendChild(newTask);
}
