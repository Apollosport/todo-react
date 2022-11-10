import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Handleediting = () => {
  

}

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
        <BsTrashFill /> <BsTrash />
      </button>
      <button className="edit" onClick={deleteHandler}>
        Edit
      </button>
      
    </div>
  );
};

export default Todo;
