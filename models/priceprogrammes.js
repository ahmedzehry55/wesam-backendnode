/**
 * Module dependencies.
 */
const mongoose = require("mongoose");

/**
 * Schema definition
 */
const ModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    badge: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      required: true,
      default:false
    },
    pargrahp:{
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
    packages: {
      type: Array,
      required: true,
    },
    desc: {
      type: Array,
      required: true,
    },
    days:  {
      type: Array,
      required: true,
    }

  },
  {
    timestamps: true,
  }
);

ModelSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

const Model = mongoose.model("Priceprogrammes", ModelSchema);

module.exports = Model;
