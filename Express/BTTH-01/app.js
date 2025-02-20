const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const { ChildProcess } = require("child_process");
const { markAsUntransferable } = require("worker_threads");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let users = fs.readFileSync("./dev-data/users.json", { encoding: "utf8" });
users = JSON.parse(users);

const checkExist = (req, res, next) => {
  let user = users.find(
    (user) => user._id === req.params.id || user.email === req.body.email
  );

  if (user === -1 || user === -1) {
    return res.json({ message: "User not found" });
  }
  next();
};

app.get("/", (req, res) => {
  res.send("This is homepage");
});
app.get("/overview", (req, res) => {
  res.send("This is overview page");
});
app.get("/product", (req, res) => {
  res.send("This is product page");
});

// Tra ve toan bo users
app.get("/api/v1/users", (req, res) => {
  res.json({
    data: users,
    message: "Return all user data",
  });
});

// Tra ve mot user
app.get("/api/v1/users/:id", checkExist, (req, res) => {
  let findUser = users.findIndex((element) => element._id === req.params.id);
  if (findUser === -1) {
    res.json({
      message: "User not found",
    });
  } else {
    res.json({
      data: users[findUser],
      message: "Found",
    });
  }
});

// Them mot user
app.post("/api/v1/users", checkExist, (req, res) => {
  let newUser = { ...req.body, _id: Math.random() };

  let checkEmail = users.findIndex(
    (element) => element.email === newUser.email
  );
  if (checkEmail !== -1) {
    res.send({ message: "User already exists: " + newUser.email });
  } else {
    users.push(newUser);
    fs.writeFileSync("./dev-data/users.json", JSON.stringify(users));
  }

  res.send({
    message: "Create successfully",
  });
});

// Cap nhat user
app.put("/api/v1/users/:id", checkExist, (req, res) => {
  let updateID = users.findIndex((element) => element._id === req.params.id);
  if (updateID === -1) {
    res.send({ message: "User not found" });
  } else {
    users[updateID] = { ...users[updateID], ...req.body };
    fs.writeFileSync("./dev-data/users.json", JSON.stringify(users));
    res.send({
      message: "Updated successfully",
    });
  }
});

// Xoa mot user
app.delete("/api/v1/users/:id", checkExist, (req, res) => {
  let deleteID = users.findIndex((element) => element._id === req.params.id);
  if (deleteID === -1) {
    res.send({ message: "User not found" });
  } else {
    users.splice(deleteID, 1);
    fs.writeFileSync("./dev-data/users.json", JSON.stringify(users));
    res.send({ message: "Deleted successfully" });
  }
});

app.use((req, res) => {
  res.status(404).send(`<h1 style="text-align:center">Page not found</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
