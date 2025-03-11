const services = require("../services/job.service");

module.exports.queryHandle = (req, res, next) => {
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
  } = req.query;

  if (isNaN(parseInt(page)) || parseInt(page) < 1) {
    page = 1;
  } else {
    page = parseInt(page);
  }

  if (isNaN(parseInt(limit)) || parseInt(limit) < 0 || parseInt(limit) > 20) {
    limit = 5;
  } else {
    limit = parseInt(limit);
  }

  if (isNaN(parseInt(salaryMin)) || parseInt(salaryMin) < 0) {
    salaryMin = 0;
  } else {
    salaryMin = parseInt(salaryMin);
  }

  if (
    isNaN(parseInt(salaryMax)) ||
    parseInt(salaryMax) < 0 ||
    parseInt(salaryMax) < salaryMin
  ) {
    salaryMax = 10000;
  } else {
    salaryMax = parseInt(salaryMax);
  }

  const validSortFields = [
    "jobTitle",
    "salaryMin",
    "salaryMax",
    "createdAt",
    "updatedAt",
  ];
  if (!sort || !validSortFields.includes(sort)) {
    sort = "updatedAt";
  }

  const validOrderValues = ["asc", "desc"];
  if (!order || !validOrderValues.includes(order.toLowerCase())) {
    order = "desc";
  } else {
    order = order.toLowerCase();
  }

  if (category) {
    if (!Array.isArray(category)) {
      category =
        typeof category === "string" ? category.split(",") : [category];
    }
  } else {
    category = null;
  }

  if (location) {
    if (!Array.isArray(location)) {
      location =
        typeof location === "string" ? location.split(",") : [location];
    }
  } else {
    location = null;
  }

  if (skill) {
    if (!Array.isArray(skill)) {
      skill = typeof skill === "string" ? skill.split(",") : [skill];
    }
  } else {
    skill = null;
  }

  req.filter = {
    salaryMin,
    salaryMax,
    category,
    location,
    skill,
    page,
    limit,
    sort,
    order,
  };

  next();
};

module.exports.validateCreateJob = async (req, res, next) => {
  if (await services.jobExists(req)) {
    res.json({ message: "This job already exists" });
  }
  next();
};

module.exports.validateUpdateJob = async (req, res, next) => {
  if (!(await services.jobExistsById(req))) {
    res.json({ message: "Job not found" });
  }
  next();
};


