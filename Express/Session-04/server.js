const express = require("express");
const server = express();
const port = 3000;
const morgan = require("morgan");

server.use(morgan("dev"));
server.use(express.static("public"));

const userRoutes = require("./routes/user.routes");
// const albumRoutes = require("./routes/album.routes");
// const photoRoutes = require("./routes/photo.routes");
server.use("/api/v1/users", userRoutes);
// server.use("/api/v1/albums", albumRoutes);
// server.use("/api/v1/photos", photoRoutes);

server.use((req, res) => {
  res.end(`<h1 style="text-align:center">404 NOT FOUND!</h1>`);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}: http://localhost:3000`);
});