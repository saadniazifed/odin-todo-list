import { createElement } from "./createElements";
import { createProjects, getProjects } from "./project";

const addTitle = () => {
  const addTitleBtn = document.querySelector(".addTitleBtn");
  addTitleBtn.addEventListener("click", getProjectTitle);
};

const getProjectTitle = () => {
  const todoProj = document.querySelector("#addTaskTitle").value;
  createProjects(todoProj);
};

const addTodo = () => {
  const addTasks = document.querySelector(".addTasks");
  addTasks.addEventListener("click", () => {
    const project = getProjects();
    project.addTodo;
    console.log(project);
  });
};

function removeRow(index) {
  const indexValue = document.querySelector(`[data-index="${index}"]`);
  const mainBody = document.querySelector(".mainBody");
  mainBody.removeChild(indexValue);
}

const editButton = () => {
  const editBtn = createElement("button", ["editBtn"], {});
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", (e) => {
    const todoBox = e.target.closest(".todoBoxes");
    const index = todoBox.dataset.index;
  });

  return editBtn;
};

const deleteButton = () => {
  const deleteBtn = createElement("button", [], {});
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    const todoBox = e.target.closest(".todoBoxes");
    const index = todoBox.dataset.index;
    // removeRow(index);
    // deleteTodo(index);
    // updateIndex(index);
  });

  return deleteBtn;
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

function updateIndex() {
  const tasks = document.querySelectorAll(".todoBoxes");
  tasks.forEach((task, index) => {
    task.dataset.index = index;
  });
}

function renderTodos(todos) {
  todos.forEach((todo, index) => {
    const mainBody = document.querySelector(".mainBody");
    const leftSide = createElement("div", ["leftSide"], {});
    const rightSide = createElement("div", ["rightSide"], {});
    // create element and append to main body
    const todoBoxes = createElement("div", ["todoBoxes"], {
      "data-index": index,
    });

    const name = todo.getName();
    const priority = todo.getPriority();

    let editBtn = editButton();
    let deleteBtn = deleteButton();

    leftSide.append(name);
    rightSide.append(priority, editBtn, deleteBtn);
    todoBoxes.append(leftSide, rightSide);
    mainBody.appendChild(todoBoxes);
  });
}

export { addTitle, addTodo, getTodoValues, editButton };
