/**
 * Module dependencies.
 */
const Cruiseprogrammes = require("../models/cruiseprogrammes");

/**
 * Create new programmes
 * @param req
 * @param res
 */
exports.create = async (req, res) => {
  const { name, desc,price, active, image, singlecruise } = req.body;
  const programmes = Cruiseprogrammes({name, desc,price, active, image, singlecruise  });
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
  const programmes = await Cruiseprogrammes.findById(id);
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
  const { name, desc,price, active, image, singlecruise  } = req.body;
  await Cruiseprogrammes.updateOne(
    { _id: id },
    {
      $set: {
        name, desc,price, active, image, singlecruise 
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
  await Cruiseprogrammes.deleteOne({ _id: id });
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
  const programmess = await Cruiseprogrammes.find()
    .select("-cites")

    .skip(skip)
    .limit(limit);
  const total = await Cruiseprogrammes.countDocuments();
  const pages = Math.ceil(total / limit);
  res.json({
    success: true,
    pages,
    data: programmess,
  });
};
