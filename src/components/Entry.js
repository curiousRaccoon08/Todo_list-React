import React, { useEffect, useRef, useState } from "react";

import "./Entry.css";

const Entry = (props) => {
  const [task, setTask] = useState("");

  const taskContainer = useRef(null);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    taskContainer.current.focus();
  });

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a Title for this Task..."
        value={task}
        onChange={changeHandler}
        ref={taskContainer}
      />
      <button
        type="submit"
        onClick={() => {
          props.dataEntryHandler(task);
          setTask("");
        }}
      >
        +
      </button>
    </form>
  );
};

export default Entry;
