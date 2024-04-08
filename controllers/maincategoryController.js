/**
 * Module dependencies.
 */
const MainCategory = require("../models/maincategory");

/**
 * Create new programmes
 * @param req
 * @param res
 */
exports.create = async (req, res) => {
  const { name,pathname,title, image, desc} = req.body;
  const programmes = MainCategory({name,pathname,title, image, desc});
  await programmes.save();
  res.json({
    success: true,
    data: programmes,
  });
};

/**
 * Find programmes by id
 * @param req
 * @param res
 */
exports.find = async (req, res) => {
  const { id } = req.params;
  const programmes = await MainCategory.findById(id);
  if (!programmes) return res.status(404).send();
  res.json({
    success: true,
    data: programmes,
  });
};

/**
 * Update programmes by id
 * @param req
 * @param res
 */
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name,pathname,title, image, desc} = req.body;
  await MainCategory.updateOne(
    { _id: id },
    {
      $set: {
        name,pathname,title, image, desc
      },
    }
  );
  res.json({ success: true });
};

/**
 * Delete programmes by id
 * @param req
 * @param res
 */
exports.delete = async (req, res) => {
  const { id } = req.params;
  await MainCategory.deleteOne({ _id: id });
  res.json({ success: true });
};

/**
 * programmess pagination
 * @param req
 * @param res
 */
exports.list = async (req, res) => {
  const page = req.query?.page || 1;
  const limit = 20;
  const skip = (page - 1) * limit;
  const programmess = await MainCategory.find()
    .skip(skip)
    .limit(limit);
  const total = await MainCategory.countDocuments();
  const pages = Math.ceil(total / limit);
  res.json({
    success: true,
    pages,
    data: programmess,
  });
};
