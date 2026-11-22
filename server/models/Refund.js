
import mongoose from "mongoose";

const refundSchema = new mongoose.Schema(
  {
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    stripeRefundId: {
      type: String,
      unique: true,
      sparse: true,
    },

    amountInPaise: {
      type: Number,
      required: true,
      min: 1,
    },

    reason: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "succeeded",
        "failed",
        "cancelled",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

refundSchema.index({ paymentId: 1 });

const Refund =
  mongoose.models.Refund ||
  mongoose.model("Refund", refundSchema);

export default Refund;
