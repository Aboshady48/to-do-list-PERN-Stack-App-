import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';
const ListTodo = () => {
  const [data, setData] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);


  useEffect(() => {
  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`The Error is: ${error}`);
    }
  };
    getAllData();
  }, []);



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setData((prevData) => prevData.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleUpdate = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo);
      // Update the data state
      setData(prev =>
        prev.map(todo => (todo.id === id ? response.data : todo))
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };
  

  return (
    <div className="todo-list-container">
      <h1 className="todo-title">Your To Dos List</h1>

      {data.length === 0 ? (
        <p className="no-todos">No todos found.</p>
      ) : (
        <div className="todo-grid">
          {data.map((todo) => (
            <div className="todo-card" key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p className={`status ${todo.completed ? 'completed' : 'pending'}`}>
                {todo.completed ? "✅ Completed" : "❌ Pending"}
              </p>

              <div className="todo-buttons">
                <button className="edit-btn" onClick={() => setEditingTodo(todo)}>✏️ Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(todo.id)}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          onClose={() => setEditingTodo(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ListTodo;
