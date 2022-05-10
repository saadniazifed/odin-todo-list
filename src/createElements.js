const createElement = (elementType, classes, otherAttributes) => {
  const element = document.createElement(elementType);
  element.classList.add(...classes);
  for (let [key, value] of Object.entries(otherAttributes)) {
    element[key] = value;
  }
  return element;
};

const todoGridBoxes = () => {
  const addTodosGrid = createElement("div", ["addTodosGrid"], {});
};

export { createElement };
