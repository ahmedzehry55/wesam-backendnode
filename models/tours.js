/**
 * Module dependencies.
 */
const mongoose = require("mongoose");

/**
 * Schema definition
 */
const ModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    act: {
      type: String,
      required: true,
    },
    place_id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    toursData:[
      {
        title:  {
          type: String,
          required: true,
        },
        img:{
          type: Array,
          required: true,
        },
        price:{
          type: String,
          required: true,
        },
        type:{
          type: String,
          required: true,
        },
        
        place_id: {
          type: String,
          required: true,
        },
        sigleTourData:[
          {
            place_id:{
              type: String,
              required: true,
            },
            packagePrice: {
              type: String,
              required: true,
            },
            img: {
              type: Array,
              required: true,
            },
            tourTime: {
              type: Number,
              required: true,
            }, 
            tourTitle: {
              type: String,
              required: true,
            },
            loc: {
              type: String,
              required: true,
            },
            map: {
              type: Object,
              required: true,
            },
            overview:{
              type: String,
              required: true,
            },
            advantage:{
              type: Array,
              required: true,
            },
            tourPackages:[
              {
                packageTitle: {
                  type: String,
                  required: true,
                },
                packagePrice: {
                  type: String,
                  required: true,
                },
                tourdesc: {
                  type: String,
                  required: true,
                },
                packgeDescSec:[{
                  header: {
                    type: String,
                    required: true,
                  },
                  text: {
                    type: Array,
                    required: true,
                  },
                }],
                packagereq:[{
                  header: {
                    type: String,
                    required: true,
                  },
                  text: {
                    type: Array,
                    required: true,
                  },
                }],
                packageused:[{
                  header: {
                    type: String,
                    required: true,
                  },
                  text: {
                    type: Array,
                    required: true,
                  },
                }]
              }
            ]
        
          }
        ]
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

const Model = mongoose.model("Tours", ModelSchema);

module.exports = Model;
