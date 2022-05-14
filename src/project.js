import { createTodo } from "./todo";

const projects = [];

const createProject = (name) => {
  let todos = [];

  const getTodos = () => todos;

  const getName = () => name;

  const setTodos = (newTodos) => (todos = newTodos);

  return {
    getTodos,
    setTodos,
    getName,
  };
};

const createProjects = (name) => {
  const todoProject = createProject(name);
  createTodo(todoProject);
  projects.push(todoProject);
};

// Allow the todo module to get the projects array
const getProjects = () => projects;

// Update the projects array
const setProjects = (newProjects) => (projects = newProjects);

export { createProjects, getProjects, setProjects };
