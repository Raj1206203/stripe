
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        priceInPaise: {
          type: Number,
          required: true,
          min: 1,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },

        lineTotalInPaise: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    subtotalInPaise: {
      type: Number,
      required: true,
      min: 0,
    },

    totalAmountInPaise: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "inr",
      lowercase: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "cancelled",
        "fulfilled",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.index({ userId: 1, createdAt: -1 });

const Order =
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);

export default Order;
