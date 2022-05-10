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
    appendTodos();
  });
};

const getTodo = () => {
  createTodo(getTodoValues());
  console.log(todo);
};

const appendTodos = () => {
  const addTodosGrid = document.querySelector(".addTodosGrid");

  const todoValues = getTodoValues();

  const name = todoValues.name;
  const description = todoValues.description;
  const priority = todoValues.priority;
  const dueDate = todoValues.dueDate;

  addTodosGrid.append(name, description, priority, dueDate);
};

const viewTodo = () => {
  const viewTodo = document.querySelector(".viewDetails");
  viewTodo.addEventListener("click", () => {
    getViewDetails();
  });
};

const getViewDetails = () => {
  viewDetails();
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

const deleteTodos = () => {
  const deleteTodo = document.querySelector(".deleteTodo");
  deleteTodo.addEventListener("click", () => {
    getDeleteDetails();
  });
};

const getDeleteDetails = () => {
  deleteTodo();
  removeRow();
};

function removeRow() {
  const e = document.querySelector(".addTodosGrid");
  e.parentElement.removeChild(e);
}

export { addTitle, addTodo, viewTodo, editTodo, deleteTodos };
