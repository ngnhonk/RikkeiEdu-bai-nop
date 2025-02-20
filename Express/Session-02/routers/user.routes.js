const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get one user successfully" });
  });
  
router.post("/", (req, res) => {
  res.json({ message: "Created one user successfully" });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ message: `Update user ${id} successfully` });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ message: `Deteted user ${id} successfully` });
});

module.exports = router;