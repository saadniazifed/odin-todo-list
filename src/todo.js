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
  console.log(todo[0].getName());
  console.log(todo[0].getDescription());
  return todoObj;
};

const newDetails = {
  name: "new Name",
  description: "New Description",
  priority: "New Priority",
  dueDate: "New Date",
};

const updateTodo = () => {
  let todoObj = todo[index];
  console.log(todoObj.setName(newDetails.name));
  console.log(todoObj.setDescription(newDetails.description));
  console.log(todoObj.setPriority(newDetails.priority));
  console.log(todoObj.setDueDate(newDetails.dueDate));
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
