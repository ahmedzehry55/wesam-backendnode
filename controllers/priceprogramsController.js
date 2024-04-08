/**
 * Module dependencies.
 */
const PriceProgrammes = require("../models/priceprogrammes");

/**
 * Create new programmes
 * @param req
 * @param res
 */
exports.create = async (req, res) => {
  const { name,badge ,bestSeller, image, pargrahp , desc, active,packages,days } = req.body;
  const programmes = PriceProgrammes({name,badge ,bestSeller, image, pargrahp , desc, active,packages,days });
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
  const programmes = await PriceProgrammes.findById(id);
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
  const {name,badge ,bestSeller, image, pargrahp , desc, active,packages,days  } = req.body;
  await PriceProgrammes.updateOne(
    { _id: id },
    {
      $set: {
        name,badge ,bestSeller, image, pargrahp , desc, active,packages,days 
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
  await PriceProgrammes.deleteOne({ _id: id });
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
  const programmess = await PriceProgrammes.find()
    .select("")

    .skip(skip)
    .limit(limit);
  const total = await PriceProgrammes.countDocuments();
  const pages = Math.ceil(total / limit);
  res.json({
    success: true,
    pages,
    data: programmess,
  });
}; 
