const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let readUser = fs.readFileSync("./data/user.json", { encoding: "utf8" });
const users = JSON.parse(readUser);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Lay toan bo user trong he thong
app.get("/users", (req, res) => {
  res.json({
    data: users,
    message: "Lay du lieu thanh cong",
  });
});

// Lay ve 1 user: get one
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  let id = +req.params.id;
  let found = users.find((element) => {
    return element.id === id;
  });
  if (!found) {
    res.send("NOT FOUND");
  } else {
    res.send(found);
  }
});

// Them moi mot user vao trong he thong
app.post("/users", (req, res) => {

  let newUser = { ...req.body, id: Math.random() };
  users.push(newUser);
  fs.writeFileSync("./data/user.json", JSON.stringify(users));

  res.send("Add user successfully");
});

// Cap nhat toan bo thong tin cua 1 user trong he thong
app.put("/users/:id", (req, res) => {
  //   res.send("Updated all users");
  let updateId = req.params.id;
  let found = users.findIndex((element) => {
    return element.id === +updateId;
  });

  if (found !== -1) {
    users[found] = { ...req.body };
    fs.writeFileSync("./data/user.json", JSON.stringify(users));
    console.log(users);
    res.send("Thanh cong!");
  } else {
    req.send("USER NOT FOUND");
  }
});

// Xoa mot user trong he thong
app.delete("/users/:id", function (req, res) {
  let deleteId = req.params.id;
  let deleteUser = users.findIndex((element) => element.id === +deleteId);
  if (deleteUser === -1) {
    res.send("Can not found this user");
  } else {
    res.json({
      user: users[deleteUser],
      message: "Xoa thanh cong",
    });
    users.splice(deleteUser, 1);
    fs.writeFileSync("./data/user.json", JSON.stringify(users));
  }

  console.log(users);
  res.send("deleted user successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
