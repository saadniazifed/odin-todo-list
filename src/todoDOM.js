import { createElement } from "./createElements";
import { createProjects, getProjects, setProjects } from "./project";

let projectIndex;

const addTitle = () => {
  const addTitleBtn = document.querySelector(".addTitleBtn");
  addTitleBtn.addEventListener("click", () => {
    getProjectTitle();
    renderProjects();
  });
};

const getProjectTitle = () => {
  const todoProj = document.querySelector("#addTaskTitle").value;
  createProjects(todoProj);
};

const renderProjects = () => {
  const projectDiv = document.querySelector(".projectDiv");
  projectDiv.innerHTML = "";

  const projects = getProjects();
  projects.forEach((project, index) => {
    const projectName = createElement("div", [], {
      "data-project-index": index,
    });
    projectName.textContent = project.getName();
    projectName.addEventListener("click", (e) => {
      projectIndex = e.target.dataset.projectIndex;
      renderTodos(getProjects()[projectIndex].getTodos());
    });

    // append the element
    projectDiv.append(projectName);
  });
};
const addTodo = () => {
  const addTasks = document.querySelector(".addTasks");
  addTasks.addEventListener("click", () => {
    const projects = getProjects();

    // console.log to debug
    console.log(projects);
    console.log(projectIndex);
    console.log(projects[projectIndex]);

    projects[projectIndex].addTodo(
      getTodoValues().name,
      getTodoValues().description,
      getTodoValues().priority,
      getTodoValues().dueDate
    );
    setProjects(projects);
    renderTodos(getProjects()[projectIndex].getTodos());
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
  let todoContainer = document.querySelector(".todoContainer");
  todoContainer.innerHTML = "";

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
    todoContainer.append(todoBoxes);
  });
}

export { addTitle, addTodo, getTodoValues, editButton };
