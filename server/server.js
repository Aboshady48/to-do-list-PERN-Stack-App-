const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000;
const db = require('./db');

//Middelware
app.use(cors())
app.use(express.json())// to req the body

//Routes

//Create a todo
app.post('/todos', async (req,res)=>{
  try {

    const {title , description , completed } = req.body;


    const newTodo = await db.query(
      'INSERT INTO todo (title, description, completed) VALUES ($1,$2,$3) RETURNING *', 
      [title, description , completed]);

    res.json(newTodo.rows[0]);

  } catch (error) {
    console.log('the error is: '+error.message);
  }
})

//get all todos
app.get('/todos', async (req,res)=>{
  try {
    const allToDos = await db.query(`SELECT * FROM todo `)
    res.json(allToDos.rows)
    
  } catch (error) {
    console.log("the error is: " + error.message);
  }
})
//get a todo
app.get('/todos/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const todo = await db.query(`SELECT * FROM todo WHERE id = $1 `,[id])
    res.json(todo.rows[0])
  } catch (error) {
    console.log("the error is: " + error.message);
  }
})

//update a todo
app.put('/todos/:id', async (req,res)=>{
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await db.query(
      `UPDATE todo SET title = $1 , description = $2 , completed = $3 WHERE id = $4 RETURNING *`,
      [title, description, completed, id]
    );
    res.json(todo.rows[0]);
  } catch (error) {
    console.log("the error is: " + error.message);
  }
})

//delete a todo

app.delete('/todos/:id', async (req,res)=>{
  try {
    const {id} = req.params
    const todo = await db.query(`DELETE FROM todo WHERE id = $1 RETURNING *`,[id])
    res.json(todo.rows[0])
  } catch (error) {
    console.log("the error is: " + error.message);
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
