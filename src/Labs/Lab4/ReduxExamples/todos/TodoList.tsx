import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item w-30" style={{ width: "375px" }}>
          <input className="shadow-none border-light rounded me-5 pt-1 pb-1" style={{ width: "150px" }} value={"Learn Mongo"}
          />
          <button className="btn btn-warning me-2"
                  id="wd-update-todo-click">
            Update </button>
          <button className="btn btn-success"
                  id="wd-add-todo-click">Add</button>
        </li>
        <li className="list-group-item" style={{ width: "375px" }}>
          <span className="me-5">Learn React</span>
          <button className="btn btn-primary me-2" style={{ marginLeft: "70px" }}
                  id="wd-set-todo-click">
            Edit </button>
          <button className="btn btn-danger"
                  id="wd-delete-todo-click">
            Delete </button>
        </li>
        <li className="list-group-item" style={{ width: "375px" }}>
          <span className="me-5">Learn Node</span>
          <button className="btn btn-primary me-2" style={{ marginLeft: "70px" }}
                  id="wd-set-todo-click">
            Edit </button>
          <button className="btn btn-danger"
                  id="wd-delete-todo-click">
            Delete </button>
        </li>
      </ul>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
  );
}

