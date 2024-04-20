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
    pathname:{
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      unique: true,
    },
    desc: {
      type: Array,
      required: true,
      default:[""]
    },
    image: {
      type: String,
      required: true,
    },
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

const Model = mongoose.model("MainCategory", ModelSchema);

module.exports = Model;
