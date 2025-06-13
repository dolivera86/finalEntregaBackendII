import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  category: String
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;