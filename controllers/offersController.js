/**
 * Module dependencies.
 */
const Offers = require("../models/offers");

/**
 * Create new programmes
 * @param req
 * @param res
 */
exports.create = async (req, res) => {
  const {  type, image, title, desc, code, active } = req.body;
  const programmes = Offers({  type, image, title, desc, code, active });
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
  const programmes = await Offers.findById(id);
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
  const {  type, image, title, desc, code, active } = req.body;
  await Offers.updateOne(
    { _id: id },
    {
      $set: {
 
        type,
        image,
        title,
        desc,
        code,
        active,
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
  await Offers.deleteOne({ _id: id });
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
  const programmess = await Offers.find()
    .select("")

    .skip(skip)
    .limit(limit);
  const total = await Offers.countDocuments();
  const pages = Math.ceil(total / limit);
  res.json({
    success: true,
    pages,
    data: programmess,
  });
};
