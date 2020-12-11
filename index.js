const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const createTodo = require("./routes/createTodo");
const updateTodo = require("./routes/updateTodo");
const deleteTodo = require("./routes/deleteTodo");
const readTodo = require("./routes/readTodo");
const indexTodo = require("./routes/indexTodo");
const searchTodo = require("./routes/searchTodo");

app.use("/create", createTodo);
app.use("/update", updateTodo);
app.use("/delete", deleteTodo);
app.use("/read", readTodo);
app.use("/search", searchTodo);
app.use("/", indexTodo);



app.listen(process.env.PORT || 3000, function () {
    console.log('Node.js listening ...');
});
