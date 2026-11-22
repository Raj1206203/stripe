
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    stripePaymentIntentId: {
      type: String,
      unique: true,
      sparse: true,
    },

    amountInPaise: {
      type: Number,
      required: true,
      min: 1,
    },

    currency: {
      type: String,
      default: "inr",
    },

    paymentMethod: {
      type: String,
      enum: [
        "card",
        "upi",
        "netbanking",
        "wallet",
        "emi",
        "unknown",
      ],
      default: "unknown",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "success",
        "failed",
        "cancelled",
        "refunded",
      ],
      default: "pending",
    },

    paidAt: {
      type: Date,
      default: null,
    },

    failureMessage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

paymentSchema.index({ userId: 1, createdAt: -1 });
paymentSchema.index({ orderId: 1 });

const Payment =
  mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);

export default Payment;
