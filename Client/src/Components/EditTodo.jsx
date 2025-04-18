import React, { useState } from 'react';
import axios from 'axios';

const EditTodo = ({ todo, onClose, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTodo = { ...todo, title, description, completed };
      await axios.put(`http://localhost:3000/todos/${todo.id}`, updatedTodo);
      onUpdate(updatedTodo); // Update the local state in ListTodo
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="edit-modal">
        <h2>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
