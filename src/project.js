const projects = [];

const createProject = (name) => {
  let todos = [];

  const getTodos = () => todos;

  const setTodos = (newTodos) => (todos = newTodos);

  return {
    getTodos,
    setTodos,
  };
};

const createProjects = (name) => {
  const todoProject = createProject(name);
  projects.push(todoProject);
  console.log(projects);
};

export { createProjects };
