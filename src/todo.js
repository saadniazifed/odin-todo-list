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

const createTodo = (name, description, priority, dueDate, index) => {
  //Creating the Object
  const todoObj = todoFactory(name, description, priority, dueDate, index);
  //Pushing it in the array
  todo.push(todoObj);
  return todoObj;
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
  console.log(todo);
};

const viewDetails = () => {
  let todoObj = todo[index];
  console.log(todoObj.getName());
  return todoObj;
};

export { createTodo, updateTodo, deleteTodo, viewDetails, getTodoValues, todo };
