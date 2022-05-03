import { createObjects, todo } from "./todo";

//Selecting DOM Elements
const addTaskBtn = document.querySelector(".addTaskBtn");
const addTodoList = document.querySelector(".addTodoList");
const mainBody = document.querySelector(".main-body");

const addTasks = () => {
  addTaskBtn.addEventListener("click", addTodos);
};

const addTodos = (event) => {
  createObjects();
  appendTodos();
  event.preventDefault();
};

const appendTodos = () => {};

export { addTasks };
