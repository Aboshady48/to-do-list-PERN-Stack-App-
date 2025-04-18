import React, { useState } from 'react';
import axios from "axios";
const InputTodo = () => {
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const onSubmetForm = async (e)=>{
        e.preventDefault();
        try {
            const body = { description , title , completed};
            const response = await axios.post("http://localhost:3000/todos", body);
            console.log(response.data);
            setDescription("")
            setCompleted(false)
            setTitle("")
        } catch (error) {
            console.error(" Error  : " + error.message);
            
        }
    }

  return (
    <div className="todo-container">
      <h1 className="todo-title">
        PERN STACK Todo List
        <span>Enter Your Todo</span>
      </h1>

      <form className="todo-form" onSubmit={onSubmetForm}>
        <input
          type="text"
          placeholder="Enter Title"
          className="todo-input todo-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="What's on your mind?"
          className="todo-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Mark as Completed
        </label>

        <button type="submit" className="todo-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
