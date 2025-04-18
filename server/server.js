const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();
const todoRoutes = require('./Routes/todoRoutes.js');
const PORT = 3000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
