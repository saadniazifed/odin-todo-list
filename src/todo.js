import { getNewDetails } from "./todoDOM";

const todo = [];

const todoFactory = (name, description, priority, dueDate, index) => {
  const getName = () => name;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;
  const getIndex = () => index;

  const setName = (newName) => (name = newName);
  const setDescription = (newDescription) => (description = newDescription);
  const setPriority = (newPriority) => (priority = newPriority);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);

  return {
    getName,
    getDescription,
    getPriority,
    getDueDate,
    getIndex,
    setName,
    setDescription,
    setPriority,
    setDueDate,
  };
};

const createTodo = (name, description, priority, dueDate) => {
  const todoObj = todoFactory(name, description, priority, dueDate);
  todo.push(todoObj);
  return todoObj;
};

const updateTodo = (index) => {
  let todoObj = todo[index];
  const newDetails = getNewDetails();
  todoObj.setName(newDetails.name);
  todoObj.setName(newDetails.description);
  todoObj.setName(newDetails.priority);
  todoObj.setName(newDetails.dueDate);
};

const deleteTodo = (index) => {
  todo.splice(index, 1);
};

const viewDetails = (index) => {
  let todoObj = todo[index];
  console.log(todoObj.getName());
  console.log(todoObj.getDescription());
  return todoObj;
};

export { createTodo, updateTodo, deleteTodo, viewDetails };
