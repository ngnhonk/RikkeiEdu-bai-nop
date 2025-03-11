const db = require("../config/db");
const _ = require("lodash");

module.exports.getAllJobs = async (req) => {
  let {
    salaryMin,
    salaryMax,
    category,
    location,
    skill,
    page,
    limit,
    sort,
    order,
  } = req.filter;
  let raw = await db("job as j")
    .join("company as cp", "cp.job_id", "j.id")
    .join("jobskill as js", "js.job_id", "j.id")
    .join("skill as sk", "js.skill_id", "sk.id")
    .join("jobcategory as jc", "jc.job_id", "j.id")
    .join("benefitjob as bj", "bj.job_id", "j.id")
    .join("joblocation as jl", "jl.job_id", "j.id")
    .join("location as lc", "jl.location_id", "lc.id")
    .join("benefit as bf", "bj.benefit_id", "bf.id")
    .join("category as ct", "jc.category_id", "ct.id")
    .select(
      "j.id as jobId",
      "j.title as jobTitle",
      "j.description as jobDescription",
      "j.requirement as jobRequirement",
      "j.salaryMin as salaryMin",
      "j.salaryMax as salaryMax",
      "sk.name as skillName",
      "ct.name as categoryName",
      "lc.name as locationName",
      "cp.id as companyId",
      "cp.name as companyName",
      "cp.logo as companyLogo",
      "bf.name as benefitName",
      "bf.value as benefitValue"
    )
    .where("salaryMin", ">", salaryMin)
    .where("salaryMax", "<", salaryMax)
    .where("ct.name", category)
    .where("locationName", location)
    .whereIn("sk.name", skill)
    .orderBy(sort, order)
    .limit(limit)
    .offset((page - 1) * limit);
  return raw;
};

module.exports.getJobSkills = async (req) => {
  let raw = await db("job as j")
    .join("jobskill as js", "js.job_id", "j.id")
    .join("skill as s", "js.skill_id", "s.id")
    .where("j.id", req.params.id)
    .select("s.name as skill");
  return raw;
};

module.exports.getOneJob = async (req) => {
  let raw = await db("job as j")
    .join("company as cp", "cp.job_id", "j.id")
    .join("jobskill as js", "js.job_id", "j.id")
    .join("skill as sk", "js.skill_id", "sk.id")
    .join("jobcategory as jc", "jc.job_id", "j.id")
    .join("benefitjob as bj", "bj.job_id", "j.id")
    .join("joblocation as jl", "jl.job_id", "j.id")
    .join("location as lc", "jl.location_id", "lc.id")
    .join("benefit as bf", "bj.benefit_id", "bf.id")
    .join("category as ct", "jc.category_id", "ct.id")
    .select(
      "j.id as jobId",
      "j.title as jobTitle",
      "j.description as jobDescription",
      "j.requirement as jobRequirement",
      "j.salaryMin as salaryMin",
      "j.salaryMax as salaryMax",
      "sk.name as skillName",
      "ct.name as categoryName",
      "lc.name as locationName",
      "cp.id as companyId",
      "cp.name as companyName",
      "cp.logo as companyLogo",
      "bf.name as benefitName",
      "bf.value as benefitValue"
    )
    .where("j.id", req.params.id);
  return raw;
};

module.exports.postAllJobs = async () => {
  return await db("jobskill").insert(data);
};

module.exports.jobExists = async (req) => {
  let status = await db("job")
    .select("*")
    .where("job.title", req.body.jobTitle)
    .first();
  return !!status;
};

module.exports.jobExistsById = async (req) => {
  let status = await db("job")
    .select("*")
    .where("job.id", req.params.id)
    .first();
  return !!status;
};

module.exports.postJob = async (req) => {
  let { jobTitle, jobDescription, jobRequirement, jobSalaryMin, jobSalaryMax } =
    req.body;
  await db("job").insert({
    title: jobTitle,
    description: jobDescription,
    requirement: jobRequirement,
    salaryMin: jobSalaryMin,
    salaryMax: jobSalaryMax,
  });
  return;
};

module.exports.updateJob = async (req) => {
  let { jobTitle, jobDescription, jobRequirement, jobSalaryMin, jobSalaryMax } =
    req.body;
  await db("job")
    .update({
      title: jobTitle,
      description: jobDescription,
      requirement: jobRequirement,
      salaryMin: jobSalaryMin,
      salaryMax: jobSalaryMax,
    })
    .where("job.id", req.params.id);
  return;
};

module.exports.deleteJob = async (req) => {
  await db("job").where("job.id", req.params.id).del();
  return;
};
