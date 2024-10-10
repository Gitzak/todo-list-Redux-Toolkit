import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from "../reduxToolkit/features/todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }));
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSave();
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(todo.id));
        Swal.fire("Deleted!", "Your todo has been deleted.", "success");
      }
    });
  };

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="h-4 w-4"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            onBlur={handleEditSave}
            onKeyDown={handleKeyDown}
            autoFocus
            className="border-b border-gray-300 focus:outline-none"
          />
        ) : (
          <span
            onDoubleClick={handleDoubleClick}
            className={`${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
