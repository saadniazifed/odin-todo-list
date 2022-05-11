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
    todoBox();
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

function removeRow(index) {
  console.log(index);
  //Take the parameter of the index value from dataset.index as it is in the `todoBox function`
  //Use the value and add some DOM method to remove the todo from the DOM side.
}

const todoBox = () => {
  const mainBody = document.querySelector(".mainBody");
  const leftSide = createElement("div", ["leftSide"], {});
  const rightSide = createElement("div", ["rightSide"], {});

  const todoCounter = mainBody.childElementCount;
  const addTodosGrid = createElement("div", ["addTodosGrid"], {
    "data-index": todoCounter,
  });

  const todoValues = getTodoValues();
  console.log(addTodosGrid.dataset.index); //the dynamic index value

  const name = todoValues.name;
  const priority = todoValues.priority;

  let editBtn = editButton();
  let deleteBtn = deleteButton();
  let viewBtn = viewTodoButton();

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
  deleteBtn.addEventListener("click", (e) => {
    deleteTodo(e.target.getAttribute("index"));
    removeRow(e.target.getAttribute("index"));
  });

  return deleteBtn;
};

const viewTodoButton = () => {
  const viewBtn = createElement("button", [], {});
  viewBtn.innerText = "View Details";
  viewBtn.addEventListener("click", viewDetails);

  return viewBtn;
};

export { addTitle, addTodo, editTodo, todoBox };
