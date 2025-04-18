const { getAllTodos, getTodoById, createTodo: _createTodo, updateTodo: _updateTodo, deleteTodo: _deleteTodo } = require('../Model/todoModel.js');
const getTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await getTodoById(id);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const newTodo = await _createTodo({ title, description, completed });
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await _updateTodo(id, req.body);
    res.json(updated.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await _deleteTodo(id);
    res.json(deleted.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
