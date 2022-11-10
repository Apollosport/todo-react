import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Todo = ({ listItem, list, setList }) => {
  const deleteHandler = () => {
    setList(list.filter((element) => element.id !== listItem.id));
  };

  const doneHandler = () => {
    setList(
      list.map((element) => {
        if (element.id === listItem.id) {
          return {
            ...element,
            done: !element.done,
          };
        }
        return element;
      })
    );
  };

  console.log("hello", listItem);

  return (
    <div className="todo">
      <input type="checkbox" onChange={doneHandler}></input>
      <li className={`todo-item ${listItem.done ? "done" : ""}`}>
        {listItem.text}
      </li>
      <button className="delete" onClick={deleteHandler}>
        <BsTrashFill /> <BsTrash />
      </button>
    </div>
  );
};

export default Todo;
