const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routers/user.routes");
const todoRoutes = require('./routers/todo.routes');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile("/public/todolist.layout.html", { root: __dirname });
});

app.use((req, res) => {
  return res
    .status(404)
    .send(`<h1 style="text-align:center">Page not found</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
