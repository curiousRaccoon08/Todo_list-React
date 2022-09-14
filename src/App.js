import React, { useState } from "react";

import "./App.css";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoItemComponent from "./components/TodoItemComponent";

const App = () => {
  const [data, setData] = useState([]);

  const dataEntryHandler = (task) => {
    const newData = {
      text: task,
      isCompleted: false,
    };
    setData((prevData) => {
      return [...prevData, newData];
    });
  };
  console.log(data);

  const taskToggleHandler = (index) => {
    const newData = [...data];
    newData[index].isCompleted = !newData[index].isCompleted;
    setData(newData);
  };

  const removeTaskHandler = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  console.log(data);

  return (
    <>
      <div className="todo-list">
        <Header />
        <TodoItemComponent
          tasksData={data}
          taskToggleHandler={taskToggleHandler}
          removeTaskHandler={removeTaskHandler}
        />
        <Entry dataEntryHandler={dataEntryHandler} />
      </div>
      <Footer />
    </>
  );
};

export default App;
