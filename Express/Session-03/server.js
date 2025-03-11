const express = require("express");
const server = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(morgan("dev"));
server.use(express.static("public"));

const userRoutes = require("./routes/user.routes");
server.use("/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

server.use((req, res) => {
  res.end(`<h1 style="text-align:center">404 NOT FOUND!</h1>`);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}: http://localhost:3000`);
});
