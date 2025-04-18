const pool = require('../Db/index.js');

const getAllTodos = () => pool.query('SELECT * FROM todo');

const getTodoById = (id) => pool.query('SELECT * FROM todo WHERE id = $1', [id]);

const createTodo = ({ title, description, completed }) => 
  pool.query('INSERT INTO todo (title, description, completed) VALUES ($1, $2, $3) RETURNING *', 
    [title, description, completed]);

const updateTodo = (id, { title, description, completed }) => 
  pool.query(
    'UPDATE todo SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *', 
    [title, description, completed, id]);

const deleteTodo = (id) => pool.query('DELETE FROM todo WHERE id = $1 RETURNING *', [id]);

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
