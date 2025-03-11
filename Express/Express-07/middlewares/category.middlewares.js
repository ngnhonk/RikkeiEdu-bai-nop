const services = require("../services/category.service");

module.exports.checkExists = async (req, res, next) => {
  let status = await services.checkExists(req);
  if (!status) {
    res.json({ message: "Category not found" });
  }
  next();
};
