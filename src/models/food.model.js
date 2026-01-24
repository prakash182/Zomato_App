const mongoose = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  foodpartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodpartener",
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  savesCount: {
    type: Number,
    default: 0,
  },
});
