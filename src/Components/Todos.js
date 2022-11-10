import React from "react";
import Todo from "./Todo";

export default function Todos({ list, setList }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {list.map((listItem) => (
          <Todo listItem={listItem} setList={setList} list={list} />
        ))}
      </ul>
    </div>
  );
}
