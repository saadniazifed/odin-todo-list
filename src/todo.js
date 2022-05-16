const todoFactory = (name, description, priority, dueDate, index) => {
  const getName = () => name;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;
  const getIndex = () => index;

  return {
    getName,
    getDescription,
    getPriority,
    getDueDate,
    getIndex,
  };
};

export { todoFactory };
