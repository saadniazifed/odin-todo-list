const todo = [];

const todoFactory = (name, description, priority, dueDate) => {
  const getName = () => name;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;

  const setName = (newName) => (name = newName);
  const setDescription = (newDescription) => (description = newDescription);
  const setPriority = (newPriority) => (priority = newPriority);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);

  return {
    getName,
    getDescription,
    getPriority,
    getDueDate,
    setName,
    setDescription,
    setPriority,
    setDueDate,
  };
};

const createTodo = () => {
  const name = "Project One";
  const description = "Some Description";
  const priority = "Low";
  const dueDate = "05/05/2022";

  //Creating the Object
  const todoObj = todoFactory(name, description, priority, dueDate);
  const todoObj1 = todoFactory(name, description, priority, dueDate);

  //Pushing it in the array
  todo.push(todoObj);
  todo.push(todoObj1);
};

const newDetails = {
  name: "new Name",
  description: "New Description",
  priority: "New Priority",
  dueDate: "New Date",
};

const updateTodo = (index, newDetails) => {
  let todoObj = todo[index]; //Access the todoObj
  console.log(todoObj.setName(newDetails.name));
  console.log(todoObj.setDescription(newDetails.description));
  console.log(todoObj.setPriority(newDetails.priority));
  console.log(todoObj.setDueDate(newDetails.dueDate));
};

const deleteTodo = (index) => {
  const deleteTask = todo.splice(index, 1);
  console.log(todo);
};

const viewDetails = (index) => {
  let todoObj = todo[index];
  console.log(todoObj.getName());
  console.log(todoObj.getDescription());
};

const index = 0;

export { createTodo, updateTodo, newDetails, index, deleteTodo, viewDetails };
