const services = require("../services/job.service");
const _ = require("lodash");

module.exports.getOneJob = async (req, res) => {
  try {
    let raw = await services.getOneJob(req);
    let jobs = transformData(raw);
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAllJobs = async (req, res) => {
  try {
    let raw = await services.getAllJobs(req);
    let jobs = transformData(raw);
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

module.exports.postJob = async (req, res) => {
  try {
    await services.postJob(req);
    res.json({ message: "Add a job successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getJobSkills = async (req, res) => {
  try {
    let raw = await services.getJobSkills(req);
    let skill = transformSkills(raw);
    res.json(skill);
  } catch (error) {
    console.log(error);
  }
};

module.exports.jobExists = async (req, res) => {
  try {
    const status = await services.jobExists(req);
    res.json(status);
  } catch (error) {
    console.log(error);
  }
};


module.exports.updateJob = async (req,res)=>{
    try {
        await services.updateJob(req);
        res.json({message: "Update job successfully"});
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteJob = async (req,res)=>{
    try {
        await services.deleteJob(req);
        res.json({message: "Deleted job successfully"});
    } catch (error) {
        console.log(error);
    }
}

const transformSkills = (rawData) => {
  console.log(rawData);
  const groupBySkills = _.map(rawData, "skill");
  return groupBySkills;
};

const transformData = (rawData) => {
  const groupedByJobId = _.groupBy(rawData, "jobId");

  return Object.keys(groupedByJobId).map((jobId) => {
    const jobGroup = groupedByJobId[jobId];
    const firstJob = jobGroup[0];

    const skills = _.uniqBy(
      jobGroup.map((item) => item.skillName).filter(Boolean),
      (skill) => skill
    );

    const categories = _.uniqBy(
      jobGroup.map((item) => item.categoryName).filter(Boolean),
      (category) => category
    );

    const locations = _.uniqBy(
      jobGroup.map((item) => item.locationName).filter(Boolean),
      (location) => location
    );

    const company = {
      companyId: firstJob.companyId,
      name: firstJob.companyName,
      logo: firstJob.companyLogo,
    };

    const benefits = _.uniqBy(
      jobGroup
        .filter((item) => item.benefitName && item.benefitValue)
        .map((item) => ({
          name: item.benefitName,
          value: item.benefitValue,
        })),
      "name"
    );

    return {
      jobId: parseInt(jobId),
      jobTitle: firstJob.jobTitle,
      jobDescription: firstJob.jobDescription,
      jobRequirement: firstJob.jobRequirement,
      salaryMin: firstJob.salaryMin,
      salaryMax: firstJob.salaryMax,
      skills,
      categories,
      locations,
      company,
      benefits,
    };
  });
};
