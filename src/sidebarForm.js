//Selecting all the Dom elements
const todoTitleDiv = document.querySelector(".todoTitleDiv");
const addBtn = document.querySelector(".addBtn");

const addTitle = () => {
  addBtn.addEventListener("click", addTitleToDiv);
};

const addTitleToDiv = () => {
  //Selecting the value of the title when the click will occur.
  let todoTitle = document.querySelector("#todoTitle").value;

  todoTitleDiv.textContent = todoTitle;
};

export { addTitle };
