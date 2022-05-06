// import { addTaskBtn, mainBody, addTodoList } from "./querySelectors";
// import { createObjects } from "./todo";

// const addTasks = () => {
//   addTaskBtn.addEventListener("click", addTodos);
// };

// //Function Responsible for Adding the todos and creating an object on each click.
// const addTodos = (event) => {
//   const taskObj = {
//     name: "Project",
//     description: "Something",
//     priority: "Low",
//   };

//   appendTodos(taskObj);
//   createObjects(taskObj);
//   event.preventDefault();
// };

// //Function responsible for appending the todos.
// const appendTodos = (taskObj) => {
//   const name = taskObj.name;
//   const description = taskObj.description;
//   const priority = () => taskObj.priority;

//   addTodoList.append(name, description, priority);
//   mainBody.appendChild(addTodoList);
// };

// export { addTasks };
