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
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    image: {
      type: String,
      // required: true, 
    },
    person: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
   
    day: {
      type: String,
      required: true,
    },
    night: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      // required: true, 
    },
    country: {
      type: String,
      // required: true, 
    },
    description: {
      type: String,
      // required: true, 
    },
    cites:{
      type: Array,

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

const Model = mongoose.model("AProgrammes", ModelSchema);

module.exports = Model;
