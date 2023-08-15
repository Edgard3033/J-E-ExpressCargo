const { createJob } = require("../db/adapters/jobs");

const express = require("express");

const jobsRouter = express.Router();

//GET /api/jobs/test
jobsRouter.get("/test", (req, res, next) => {
  res.send("JOBS COMING SOON!!!");
});
