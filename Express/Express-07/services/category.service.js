const db = require("../config/db");

module.exports.jobByCategory = async (req, res) => {
  let jobs = await db("job as j")
    .join("jobcategory as jc", "jc.job_id", "j.id")
    .join("category as c", "jc.category_id", "c.id")
    .where("c.id", req.params.id)
    .select("c.name as categoryName", "j.id as jobId", "j.title as jobTitle");
  return jobs;
};

module.exports.createCategory = async (req) => {
  let { name } = req.body;
  await db("category").insert({ name });
  return;
};

module.exports.updateCategory = async (req) => {
  let { name } = req.body;
  await db("category").update({ name }).where({ id: req.params.id });
  return;
};

module.exports.deleteCategory = async (req) => {
  await db("category").where({ id: req.params.id }).del();
  return;
};

module.exports.checkExists = async (req) => {
  let status = await db("category")
    .where({ id: req.params.id })
    .select("*")
    .first();
  return !!status;
};
