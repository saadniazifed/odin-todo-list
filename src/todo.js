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

export { todoFactory };
