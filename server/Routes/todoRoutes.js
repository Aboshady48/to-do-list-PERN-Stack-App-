const { Router } = require("express");
const router = Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../Controllers/todoController.js');
router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
