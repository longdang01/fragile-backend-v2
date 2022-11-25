const mongoose = require("mongoose");

const cartDetailSchema = mongoose.Schema(
  {
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    size: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartDetail", cartDetailSchema);