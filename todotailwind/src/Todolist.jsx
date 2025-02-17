import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function btnOnChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="ml-[100px] mr-[100px] text-center pt-[50px] font-sans">
      <h1 className="text-4xl text-white mb-4">To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter your task..."
        value={newTask}
        onChange={btnOnChange}
        className="text-[1.6rem] px-[10px] py-[8px] border-2 text-white border-[hsla(0,0%,80%,0.5)] rounded-[5px] mb-4"
      />
      <button
        className="text-[2rem] font-bold bg-green-500 hover:bg-green-600 px-[20px] py-[10px] rounded-[5px] text-white cursor-pointer transition-colors duration-500 ease"
        onClick={addTask}
      >
        Add
      </button>

      <div>
        <ol className="p-0 mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="text-[2rem] font-bold py-[15px] bg-[hsl(0,0%,97%)] mb-[10px] border-3 border-[hsla(0,0%,85%,0.75)] flex items-center justify-between"
            >
              <span className="flex-grow">{task}</span>
              <div>
                <button
                  className="text-[1.4rem] bg-red-500 hover:bg-red-600 px-[12px] py-[8px] rounded-[5px] text-white cursor-pointer transition-colors duration-500 ease ml-[10px]"
                  onClick={() => deleteTask(index)}
                  aria-label="Delete task"
                >
                  Delete
                </button>
                <button
                  className="text-[1.4rem] bg-blue-500 hover:bg-blue-600 px-[12px] py-[8px] rounded-[5px] text-white cursor-pointer transition-colors duration-500 ease ml-[10px]"
                  onClick={() => moveUp(index)}
                  aria-label="Move task up"
                >
                  👆
                </button>
                <button
                  className="text-[1.4rem] bg-yellow-500 hover:bg-yellow-600 px-[12px] py-[8px] rounded-[5px] text-white cursor-pointer transition-colors duration-500 ease ml-[10px]"
                  onClick={() => moveDown(index)}
                  aria-label="Move task down"
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todolist;
