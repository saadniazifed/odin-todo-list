//latest push
import { createElement } from "./createElements";
import { createTodo, deleteTodo, updateTodo, viewDetails } from "./todo";

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
  const todoObj = getTodoValues();
  createTodo(
    todoObj.name,
    todoObj.description,
    todoObj.priority,
    todoObj.dueDate
  );
};

function removeRow(index) {
  const indexValue = document.querySelector(`[data-index="${index}"]`);
  const mainBody = document.querySelector(".mainBody");
  mainBody.removeChild(indexValue);
}

const todoBox = () => {
  const mainBody = document.querySelector(".mainBody");
  const leftSide = createElement("div", ["leftSide"], {});
  const rightSide = createElement("div", ["rightSide"], {});

  const todoCounter = mainBody.childElementCount - 1;
  const todoBoxes = createElement("div", ["todoBoxes"], {
    "data-index": todoCounter,
  });

  const todoValues = getTodoValues();

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
  editBtn.addEventListener("click", (e) => {
    const todoBox = e.target.closest(".todoBoxes");
    const index = todoBox.dataset.index;
    updateTodo(index);
  });
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
    updateIndex(index);
  });

  return deleteBtn;
};

const viewTodoButton = () => {
  const viewBtn = createElement("button", [], {});
  viewBtn.innerText = "View Details";
  viewBtn.addEventListener("click", (e) => {
    const todoBox = e.target.closest(".todoBoxes");
    const index = todoBox.dataset.index;
    viewDetails(index);
  });

  return viewBtn;
};

const getTodoValues = () => {
  const todoValues = {
    name: document.querySelector("#taskName").value,
    description: document.querySelector("#taskDescription").value,
    priority: document.querySelector('input[name="priorityValue"]:checked')
      .value,
    dueDate: document.querySelector("#dueDate").value,
  };

  return todoValues;
};

const getNewDetails = () => {
  const newDetails = {
    name: document.querySelector("#taskName").value,
    description: document.querySelector("#taskDescription").value,
    priority: document.querySelector('input[name="priorityValue"]:checked')
      .value,
    dueDate: document.querySelector("#dueDate").value,
  };

  return newDetails;
};

function updateIndex() {
  const tasks = document.querySelectorAll(".todoBoxes");
  tasks.forEach((task, index) => {
    task.dataset.index = index;
  });
}

export {
  addTitle,
  addTodo,
  todoBox,
  viewTodoButton,
  getNewDetails,
  editButton,
};
