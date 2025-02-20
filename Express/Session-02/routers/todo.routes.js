const express = require("express");
const router = express.Router();
const fs = require("fs");

let todos = fs.readFileSync("./data/todo.json");
todos = JSON.parse(todos);
router.get("/", (req, res) => {
  res.json({
    data: todos,
    message: "All tasks",
  });
});

router.post("/", (req, res) => {
  let content = req.body.content;
  let todo = {
    id: Math.random(),
    content: content,
    status: false,
  };

  todos.push(todo);
  fs.writeFileSync("./data/todo.json", JSON.stringify(todos));

  res.json({ message: "Created one todo successfully", id: res.id });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let status = req.body.status;
  console.log(id);
  console.log(status);
  let found = todos.findIndex((element) => {
    return (element.id = +id);
  });

  todos[found] = status;
  res.json({ message: "updated one todo successfully" });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let deleteTask = todos.findIndex((element) => element.id === +id);
  todos.splice(id, 1);
  fs.writeFileSync("./data/todo.json", JSON.stringify(todos));
  res.json({ message: `Deteted task ${id} successfully` });
});

module.exports = router;
