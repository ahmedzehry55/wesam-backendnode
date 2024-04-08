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
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
    desc: {
      type: Array,
      required: true,
    },
    cites: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        days: [
          {
            day: { 
              type: String,
              required: true,
            },
            title: {
              type: String,
              required: true,
            },
            desc: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
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

const Model = mongoose.model("Programmes", ModelSchema);

module.exports = Model;
