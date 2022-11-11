import React from "react";
import uuid from "react-uuid";
import { AiFillPlusCircle } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";

export default function TodosInput({ inputText, setInputText, list, setList }) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Nothing to do? Maybe do Something from the list!");
      return;
    }
    setList([
      ...list,
      { text: inputText, done: false, edit: false, id: uuid() },
    ]);
    setInputText("");
  };

  return (
    <form className="form-input">
      <h1>ToDo || !ToDo</h1>
      <div>
        <input
          className="inputArea"
          value={inputText}
          onChange={inputHandler}
          placeholder="What would you like to do?"
        />
        <button className="addButton" onClick={submitHandler}>
          <AiFillPlusCircle /> {/* <CgAdd /> */}
        </button>
      </div>
    </form>
  );
}
