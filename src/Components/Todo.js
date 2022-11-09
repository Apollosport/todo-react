import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "react-bootstrap";

library.add(faCheckSquare, faCoffee);

const Todo = ({ todo, list, setList }) => {
  const deleteHandler = () => {
    setList(list.filter((element) => element.id !== todo.id));
  };

  const doneHandler = () => {
    setList(
      list.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            done: !element.done,
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="todo">
      <input type="checkbox" onChange={doneHandler}></input>
      <li className={`todo-item ${todo.done ? "done" : ""}`}>{todo.text}</li>
      <button className="delete" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
