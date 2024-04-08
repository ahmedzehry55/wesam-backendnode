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

    desc: {
      type: Array,
      required: true,
    },
    list:[
      {
        hotelName:  {
          type: String,
          required: true,
          unique: true,
        },
        rate:  {
          type: Number,
          required: true,
        },
        location:  {
          type: String,
          required: true,
        },
        distance:  {
          type: String,
          required: true,
        },
        review:  {
          type: String,
          required: true,
        },
        timer: {
          type: String,
          required: true,
        },
        image:  {
          type: String,
          required: true,
        },
      }
    ]
  
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

const Model = mongoose.model("Hotels", ModelSchema);

module.exports = Model;
