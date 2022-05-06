//Selecting DOM Elements
const addTitleBtn = document.querySelector(".addTitleBtn");
const addTitleDiv = document.querySelector(".addTitleDiv");
const addTaskInDom = document.querySelector(".addTaskInDom");
const addTodos = document.querySelector(".addTodos");

const addTaskTitle = () => {
  addTitleBtn.addEventListener("click", addTaskValue);
};

const addTaskValue = () => {
  const addTaskTitle = document.querySelector("#addTaskTitle").value;
  addTitleDiv.append(addTaskTitle);
};

const addingTodo = () => {
  addTaskInDom.addEventListener("click", addTodo);
};

const addTodo = () => {
  const taskName = document.querySelector("#taskName").value;
  const taskDescription = document.querySelector("#taskDescription").value;
  const taskPriority = document.querySelector(
    'input[class="priorityValue"]:checked'
  ).value;
  const taskDueDate = document.querySelector("#dueDate").value;

  addTodos.append(taskName, taskDescription, taskPriority, taskDueDate);
};

export { addTaskTitle, addingTodo };
