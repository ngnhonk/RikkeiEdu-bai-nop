const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const db = require("../config/db");
// end point

router.get("/", (req, res) => {
  const query = "select * from user";
  db.execute(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.json({ data: data });
    }
  });
});

router.get("/:id", (req, res) => {
  db.execute(`select * from user where id = ${req.params.id}`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      if (data.lenth > 0 ) {
        res.json({ data: data });
      } else {
        res.json({ message: "User not found"});
      }
    }
  });
});

router.put("/:id", (req, res) => {
  let { email, username, password } = req.body;

  db.execute(
    `UPDATE user SET email = ?, username = ?, password = ? WHERE id = ?`,
    [email, username, password, req.params.id],
    (err, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json({ error: "Error" });
      } else {
        res.json({ message: "Update successfully" });
      }
    }
  );
});

router.post("/", (req, res) => {
  let = { email, username, password } = { ...req.body };

  db.execute(
    `insert into user(email,username,password) values ('${email}', '${username}', '${password}')`,
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.json({ message: "Add a user successfully" });
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  db.execute(`delete from user where id = ${req.params.id}`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.json({ data });
    }
  });
  res.json({ message: "Delete user successfully" });
});

module.exports = router;
