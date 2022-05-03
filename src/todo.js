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

const createObjects = () => {
  //Selecting value from the form
  const nameOfTask = document.querySelector("#nameOfTask").value;
  const descriptionOfTask = document.querySelector("#descriptionOfTask").value;
  const priorityOfTask = document.querySelector(".priorityOfTask").value;

  //Creating the Object
  const todoObj = todoFactory(nameOfTask, descriptionOfTask, priorityOfTask);

  //Pushing it in the array
  todo.push(todoObj);

  //Console logging the values.
  console.log(todo);
  console.log(todoObj.getName());
  console.log(todoObj.getDescription());
  console.log(todoObj.getPriority());
};

export { todo, createObjects };
