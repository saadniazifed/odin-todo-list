//Selecting DOM Elements
const addTaskBtn = document.querySelector(".addTaskBtn");

const todo = [];

const todoFactory = (name, description, priority, id) => {
  const getName = () => name;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getID = () => id;

  return {
    getName,
    getDescription,
    getPriority,
    getID,
  };
};

const createObjects = (taskObj) => {
  const { name, description, priority } = taskObj;

  //Creating the Object
  taskObj = todoFactory(name, description, priority);

  //Pushing it in the array
  todo.push(taskObj);
};

export { todo, createObjects };
