import { todoFactory } from "./todo";
import { getTodoValues } from "./todoDOM";

let projects = [];

const createProject = (name) => {
  let todos = [];

  const getTodos = () => todos;

  const getName = () => name;

  const addTodo = (name, description, priority, dueDate) => {
    const todoObj = todoFactory(name, description, priority, dueDate);
    todos.push(todoObj);
  };

  const updateTodo = (index) => {
    let todoObj = todos[index];
    const newDetails = getTodoValues();
    todoObj.getName(newDetails.name);
    todoObj.getDescription(newDetails.description);
    todoObj.getPriority(newDetails.priority);
    todoObj.getDueDate(newDetails.dueDate);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
  };

  const setTodos = (newTodos) => (todos = newTodos);

  return {
    addTodo,
    updateTodo,
    deleteTodo,
    getTodos,
    setTodos,
    getName,
  };
};

const createProjects = (name) => {
  const todoProject = createProject(name);
  projects.push(todoProject);
  console.log(projects);
};

// Allow the todo module to get the projects array
const getProjects = () => projects;

// Update the projects array
const setProjects = (newProjects) => (projects = newProjects);

export { createProjects, getProjects, setProjects };
