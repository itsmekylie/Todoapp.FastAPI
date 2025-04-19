import React, { useState } from "react";
import { updateTodo, deleteTodo } from "../api";

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle completion (checkbox)
  const handleToggleComplete = async () => {
    setIsLoading(true);
    try {
      const updated = await updateTodo(todo.id, {
        title: todo.title,
        completed: !todo.completed,
      });
      onUpdate(updated);
    } catch (err) {
      console.error("Error updating todo:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Save after editing
  const handleSave = async () => {
    if (!title.trim()) return;
    setIsLoading(true);
    try {
      const updatedTodo = await updateTodo(todo.id, {
        title: title.trim(),
        completed: todo.completed,
      });
      onUpdate(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save task", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setTitle(todo.title);
    setIsEditing(false);
  };

  // Delete
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteTodo(todo.id);
      onDelete(todo.id);
    } catch (error) {
      console.error("Failed to delete task", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`todo-item ${isLoading ? "loading" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
        disabled={isLoading || isEditing}
      />

      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
            autoFocus
          />
          <button onClick={handleSave} disabled={isLoading || !title.trim()}>
            Save
          </button>
          <button onClick={handleCancelEdit} disabled={isLoading}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)} disabled={isLoading}>
            Edit
          </button>
          <button onClick={handleDelete} disabled={isLoading}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
