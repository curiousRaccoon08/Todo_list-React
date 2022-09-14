import React from "react";

import "./TodoItemComponent.css";

const TodoItemComponent = (props) => {
  return (
    <>
      {props.tasksData.map((item) => {
        return (
          <div className="todo" key={Math.random()}>
            <span
              className={item.isCompleted ? "todo-completed" : "todo-text"}
              onClick={() => {
                props.taskToggleHandler(props.tasksData.indexOf(item));
              }}
            >
              {item.text}
            </span>
            <button
              className="clear"
              type="button"
              onClick={() => {
                props.removeTaskHandler(props.tasksData.indexOf(item));
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoItemComponent;
