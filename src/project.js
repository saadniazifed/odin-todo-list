import { todoFactory } from "./todo";

let projects = [];

const createProject = (name) => {
  let todos = [];

  const getTodos = () => todos;

  const getName = () => name;

  const addTodo = (name, description, priority, dueDate) => {
    const todoObj = todoFactory(name, description, priority, dueDate);
    todos.push(todoObj);
  };

  const updateTodo = (index, newDetails) => {
    let todoObj = todos[index];
    todoObj.setName(newDetails.name);
    todoObj.setDescription(newDetails.description);
    todoObj.setPriority(newDetails.priority);
    todoObj.setDueDate(newDetails.dueDate);
  };

  const setTodos = (newTodos) => (todos = newTodos);

  return {
    addTodo,
    updateTodo,
    getTodos,
    setTodos,
    getName,
  };
};

const createProjects = (name) => {
  const todoProject = createProject(name);
  projects.push(todoProject);
};

// Allow the todo module to get the projects array
const getProjects = () => projects;

// Update the projects array
const setProjects = (newProjects) => (projects = newProjects);

export { createProjects, getProjects, setProjects };
