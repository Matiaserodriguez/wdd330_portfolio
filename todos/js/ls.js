const TODO_LIST = "todo_list";

function getTodoList() {
  const localStorageList = localStorage.getItem(TODO_LIST);
  let todoList = [];

  if (localStorageList) {
    todoList = JSON.parse(localStorageList);
  }

  return todoList;
}

function setTodoList(todoList) {
  const jsonList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST, jsonList);
}

export default {
  getTodoList,
  setTodoList,
};
