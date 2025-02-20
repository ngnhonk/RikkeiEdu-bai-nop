const express = require("express");
const app = express();
const port = 3000;

const questionRoutes = require("./routes/question.routes");

app.use("/api/v1", questionRoutes);

app.use((req, res) => {
  res.end(`<h1 style="text-align:center">404 NOT FOUND!</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}: http://localhost:3000`);
});
