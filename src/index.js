import "./style.css";
import {
  createTodo,
  deleteTodo,
  index,
  newDetails,
  updateTodo,
  viewDetails,
} from "./todo";

createTodo();
updateTodo(index, newDetails);
deleteTodo(index);
viewDetails(index);
