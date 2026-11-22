
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },
        
        priceInPaise: {
            type: Number,
            required: true,
            min: 1,
        },

        image: {
            type: String,
            default: "",
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

productSchema.index({ name: 1 });
productSchema.index({ category: 1, isActive: 1 });

const Product =
    mongoose.models.Product ||
    mongoose.model("Product", productSchema);

export default Product;
