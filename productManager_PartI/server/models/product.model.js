const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: { type: String },
    productPrice: { type: Number },
    productDescription: { type: String }
}, { timestamps: true });

const ProductExport = mongoose.model("Product", ProductSchema);
module.exports = ProductExport;