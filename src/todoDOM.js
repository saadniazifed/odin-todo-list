import { createElement } from "./createElements";
import {
  createTodo,
  deleteTodo,
  getTodoValues,
  updateTodo,
  viewDetails,
  todo,
} from "./todo";

const addTitle = () => {
  const addTitleBtn = document.querySelector(".addTitleBtn");
  addTitleBtn.addEventListener("click", getTitle);
};

const getTitle = () => {
  const addTaskTitle = document.querySelector("#addTaskTitle").value;
  console.log(addTaskTitle);
};

const addTodo = () => {
  const addTasks = document.querySelector(".addTasks");
  addTasks.addEventListener("click", () => {
    getTodo();
    getTodoGridBoxes();
  });
};

const getTodo = () => {
  createTodo(getTodoValues());
  console.log(todo);
};

const editTodo = () => {
  const editTodo = document.querySelector(".editTodo");
  editTodo.addEventListener("click", () => {
    getEditDetails();
  });
};

const getEditDetails = () => {
  updateTodo();
};

function removeRow() {
  const e = document.querySelector(".addTodosGrid");
  e.parentElement.removeChild(e);
}

const getTodoGridBoxes = () => {
  const addTodosGrid = createElement("div", ["addTodosGrid"], {});
  const leftSide = createElement("div", ["leftSide"], {});
  const rightSide = createElement("div", ["rightSide"], {});
  const mainBody = document.querySelector(".mainBody");

  const todoValues = getTodoValues();

  let editBtn = editButton();
  let deleteBtn = deleteButton();
  let viewBtn = viewTodoButton();

  const name = todoValues.name;
  const priority = todoValues.priority;

  leftSide.append(name);
  rightSide.append(priority, editBtn, deleteBtn, viewBtn);
  addTodosGrid.append(leftSide, rightSide);
  mainBody.appendChild(addTodosGrid);
};

const editButton = () => {
  const editBtn = createElement("button", [], {});
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", updateTodo);

  return editBtn;
};

const deleteButton = () => {
  const deleteBtn = createElement("button", [], {});
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    deleteTodo();
    removeRow();
  });

  return deleteBtn;
};

const viewTodoButton = () => {
  const viewBtn = createElement("button", [], {});
  viewBtn.innerText = "View Details";
  viewBtn.addEventListener("click", viewDetails);

  return viewBtn;
};

export { addTitle, addTodo, editTodo, getTodoGridBoxes };
