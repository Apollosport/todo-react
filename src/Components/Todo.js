import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

<<<<<<< HEAD
const Handleediting = () => {
  

}

const Todo = ({ todo, list, setList }) => {
=======
const Todo = ({ listItem, list, setList }) => {
>>>>>>> 9178af8c6b588c0d435b90bb737b4ae36d1306e1
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
<<<<<<< HEAD
      <li className={`todo-item ${todo.done ? "done" : ""}`}>{todo.text}</li>
=======
      <li className={`todo-item ${listItem.done ? "done" : ""}`}>
        {listItem.text}
      </li>
>>>>>>> 9178af8c6b588c0d435b90bb737b4ae36d1306e1
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
