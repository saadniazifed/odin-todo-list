import { createTodo } from "./todo";

//Selecting DOM Elements
const addTitleBtn = document.querySelector(".addTitleBtn");
const addTasks = document.querySelector(".addTasks");

const appendTitle = () => {
  addTitleBtn.addEventListener("click", addTitle);
};

const addTitle = () => {
  const addTaskTitle = document.querySelector("#addTaskTitle").value;
  document.body.append(addTaskTitle);
};

const todoValues = {
  name: document.querySelector("#taskName").value,
  description: document.querySelector("#taskDescription").value,
  priority: document.querySelector(
    "input[type='radio'][class='priorityValue']:checked"
  ).value,
  dueDate: document.querySelector("#dueDate").value,
};

const addTodos = () => {
  addTasks.addEventListener("click", addTodo);
};

const addTodo = () => {
  //Take the value of the task name , and pass it as a parameter to the createTodo function in another module to create the object.

  console.log(createTodo(todoValues));
  //Display the value in the console.log
};

export { appendTitle, addTodos, todoValues };
