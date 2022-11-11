import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const Todo = ({ listItem, list, setList }) => {
  const [edit, setEdit] = useState("");

  const inputHandler = (e) => {
    setEdit(e.target.value);
  };

  const handleEditing = (e) => {
    e.preventDefault();
    if (edit === "") {
      alert("Nothing to do? Maybe do Something from the list!");
      return;
    }
    console.log("list before ", list);
    setList(
      list.map((element) => {
        if (element.id === listItem.id) {
          return {
            ...element,
            text: edit,
            edit: !element.edit,
          };
        }
        return element;
      })
    );
    console.log("listafter ", list);
  };

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

  function toggleEdit() {
    setList(
      list.map((element) => {
        if (element.id === listItem.id) {
          return {
            ...element,
            edit: !element.edit,
          };
        }
        return element;
      })
    );
  }

  return (
    <div className="todo">
      <input type="checkbox" onChange={doneHandler}></input>
      <li
        className={`todo-item ${listItem.done ? "done" : ""} ${
          listItem.edit ? "invisible" : "visible"
        }`}
        onClick={toggleEdit}
      >
        {listItem.text}
      </li>
      <form onSubmit={handleEditing}>
        <input
          className={`todo-edit ${listItem.edit ? "visible" : "invisible"}`}
          type="text"
          placeholder={listItem.text}
          onChange={inputHandler}
        ></input>
      </form>
      <button className="delete" onClick={deleteHandler}>
        <BsTrashFill /> <BsTrash />
      </button>
    </div>
  );
};

export default Todo;
