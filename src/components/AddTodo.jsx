import React, { useState } from "react";
import { createTodo } from "../api";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        const newTodo = await createTodo(title);
        onAdd(newTodo); // Adds to the list in the parent component
        setTitle("");
      } catch (error) {
        console.error("Failed to add task", error);
      }
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
