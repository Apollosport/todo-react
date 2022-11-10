import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";




const Todo = ({ listItem, list, setList }) => {
  const [edit, setEdit] = useState('');

  const inputHandler = (e) => {
    setEdit(e.target.value);
  };

  const enterHandler = (e) => { 
    if (e.code === "Enter"){
      handleEditing();
    }
  }

  const handleEditing = () => { 
    console.log(' edit = ', edit);   
      if (edit === "") {
        alert("Nothing to do? Maybe do Something from the list!W");
        return;
      }      
      //setList([...list, { text: edit}]);
      setList(list.map((element) => {
        if (element.id === listItem.id) {           
      return {
        ...element,
        text: edit,
      };       
    };
    return element;
  }))
  console.log(list);
  }

  

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
     <input className='todo-edit' type="text" value={edit} onKeyPress={enterHandler} onChange={inputHandler}></input>     
      <button className="delete" onClick={deleteHandler}>
        <BsTrashFill /> <BsTrash />
      </button>
      <button className="edit" onClick={handleEditing}>
        Edit
      </button>
      
    </div>
  );
};

export default Todo;

//${listItem.edit ? "done" : ""}
//(e) => setEdit(e.target.value)