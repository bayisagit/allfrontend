import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "", completed: false });
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  }

  function addTask() {
    if (newTask.title.trim() !== "") {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: "", description: "", dueDate: "", completed: false });
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompletion(id) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function filteredTasks() {
    let filtered = [...tasks];
    if (filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === "pending") {
      filtered = filtered.filter((task) => !task.completed);
    }
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    return filtered;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-6 max-w-2xl w-full bg-white  shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
        <div className="flex flex-col gap-2">
          <input name="title" value={newTask.title} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Title" className="p-2 border rounded bg-gray-800 text-white" />
          <input name="description" value={newTask.description} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Description" className="p-2 border rounded bg-gray-800 text-white" />
          <input name="dueDate" type="date" value={newTask.dueDate} onChange={handleInputChange} onKeyPress={handleKeyPress} className=" p-2 border rounded bg-gray-500 text-white" />
          <button onClick={addTask} className="cursor-pointer p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Add Task</button>
        </div>

        <div className="mt-4 flex justify-between">
          <select onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded bg-gray-800 text-white">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <select onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded bg-gray-800 text-white">
            <option value="date">Sort by Date</option>
          </select>
        </div>

        <ul className="mt-4">
          {filteredTasks().map((task) => (
            <li key={task.id} className="p-2 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h3 className={`font-bold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
                <p>{task.description}</p>
                <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleCompletion(task.id)} className="cursor-pointer p-1 bg-green-500 hover:bg-green-600 text-white rounded">{task.completed ? "Undo" : "Complete"}</button>
                <button onClick={() => deleteTask(task.id)} className="cursor-pointer p-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
