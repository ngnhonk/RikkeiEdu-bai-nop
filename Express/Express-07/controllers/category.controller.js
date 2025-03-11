const services = require("../services/category.service");
const _ = require("lodash");

module.exports.jobByCategory = async (req, res) => {
  try {
    let raw = await services.jobByCategory(req);
    res.json(transformCategory(raw));
  } catch (error) {
    console.log(error);
  }
};
const transformCategory = (rawData) => {
  const groupByCategory = _.groupBy(rawData, "categoryName");
  const result = Object.keys(groupByCategory).map((categoryName) => {
    const jobs = groupByCategory[categoryName].map((item) => {
      return {
        jobId: item.jobId,
        jobTitle: item.jobTitle,
      };
    });

    return {
      categoryName: categoryName,
      jobs: jobs,
    };
  });

  return { categories: result };
};

module.exports.createCategory = async (req, res) => {
  try {
    await services.createCategory(req);
    res.json({ message: "Add category successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    await services.updateCategory(req);
    res.json({ message: "Updated category successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    await services.deleteCategory(req);
    res.json({ message: "Deleted category successfully" });
  } catch (error) {
    console.log(error);
  }
};
