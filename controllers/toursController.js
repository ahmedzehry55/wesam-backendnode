/**
 * Module dependencies.
 */
const Tours = require("../models/tours");

/**
 * Create new programmes
 * @param req
 * @param res
 */
exports.create = async (req, res) => {
  const { title, image, act, place_id, active, toursData } = req.body;
  const programmes = Tours({title, image, act, place_id, active, toursData});
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
  const programmes = await Tours.findById(id);
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
  const { title, image, act, place_id, active, toursData } = req.body;
  await Tours.updateOne(
    { _id: id },
    {
      $set: {
        title, image, act, place_id, active, toursData 
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
  await Tours.deleteOne({ _id: id });
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
  const programmess = await Tours.find()
    .select("")

    .skip(skip)
    .limit(limit);
  const total = await Tours.countDocuments();
  const pages = Math.ceil(total / limit);
  res.json({
    success: true,
    pages,
    data: programmess,
  });
};
