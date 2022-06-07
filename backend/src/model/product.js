const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    gender:{type:String,required:true},
    size:{type:String,required:true}
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Product = mongoose.model("product", productSchema);
module.exports = Product;