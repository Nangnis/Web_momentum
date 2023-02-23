const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput = document.querySelector("#todo-form input"); // 위와 동일
const todoList = document.querySelector("#todo-list");

const todos = [];

function savedTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "❌";
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  savedTodo();
}

todoForm.addEventListener("submit", onTodoSubmit);

// console.dir(todoList);
