const port = 3000;
const express = require('express');
const server = express();

const jobRouter = require("./routes/job.routes");
const categoryRouter = require("./routes/category.routes");
server.use("/api/v1/jobs", jobRouter);
server.use("/api/v1/categories", categoryRouter);

server.listen(port, () => {
    console.log(`server is running at ${port}: http://localhost:${port}`);
})