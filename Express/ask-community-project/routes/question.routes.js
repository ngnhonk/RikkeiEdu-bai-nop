const express = require('express');
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { monitorEventLoopDelay } = require("perf_hooks");
const { Router } = require("express");

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const dataPath = "data/questions.json";
let questions = fs.readFileSync(dataPath);
questions = JSON.parse(questions);

function findID(req, questions) {
  return questions.findIndex((element) => element.id === +req.params.id);
}

const checkExistID = (req, res, next) => {
  let found = findID(req, questions);
  found !== -1 ? next() : res.json({ message: "Question not found" });
};

const checkExistContent = (req, res, next) => {
  let foundContent = questions.findIndex(
    (element) => element.content === req.body.content
  );
  foundContent === -1
    ? next()
    : res.status(404).json({ message: "Question already exists" });
};

router.get("/", (req, res) => {
  res.send(`This is hoomepage!`);
});

router.get("/ask", (req, res) => { 
  res.send("This is asking page!");
});

router.get("/question-detail/:id", checkExistID, (req, res) => {
  res.send("This is question details page!");
});

router.get("/questions", (req, res) => {
  res.status(200).json({
    data: questions,
  });
});

router.post("/questions", checkExistContent, (req, res) => {
  questions.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(questions));
  res.json({ message: "Create successfully" });
});

router.get("/questions/:id", checkExistID, (req, res) => {
  res.json({
    data: questions[findID(req, questions)],
  });
});

router.put(
  "/questions/:id",
  checkExistID,
  checkExistContent,
  (req, res) => {
    questions[findID(req, questions)] = req.body;
    fs.writeFileSync(dataPath, JSON.stringify(questions));
    res.json({ message: "Update successfully" });
  }
);

router.delete("/questions/:id", checkExistID, (req, res) => {
  let found = findID(req, questions);

  questions.splice(found, 1);
  fs.writeFileSync(dataPath, JSON.stringify(questions));
  res.json({ message: "Delete successfully" });
});

module.exports = router;