//latest push
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
  // const indexValue = document.querySelector(`[data-index="${index}"]`);
  // const mainBody = document.querySelector(".mainBody");
  // mainBody.removeChild(indexValue);
}

const todoBox = () => {
  console.log(todo);
  const mainBody = document.querySelector(".mainBody");
  const leftSide = createElement("div", ["leftSide"], {});
  const rightSide = createElement("div", ["rightSide"], {});

  const todoCounter = mainBody.childElementCount;
  const todoBoxes = createElement("div", ["todoBoxes"], {
    "data-index": todoCounter,
  });

  const todoValues = getTodoValues();
  // console.log(todoBoxes.dataset.index); //the dynamic index value

  const name = todoValues.name;
  const priority = todoValues.priority;

  let editBtn = editButton();
  let deleteBtn = deleteButton();
  let viewBtn = viewTodoButton();

  leftSide.append(name);
  rightSide.append(priority, editBtn, deleteBtn, viewBtn);
  todoBoxes.append(leftSide, rightSide);
  mainBody.appendChild(todoBoxes);
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
    const todoBox = e.target.closest(".todoBoxes");
    const index = todoBox.dataset.index;
    removeRow(index);
    deleteTodo(index);
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
