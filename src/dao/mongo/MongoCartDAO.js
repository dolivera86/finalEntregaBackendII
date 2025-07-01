import CartModel from '../../models/Cart.model.js';

export default class MongoCartDAO {
  async getByUser(userId) {
    return CartModel.findOne({ user: userId }).populate('products.product');
  }

  async create(userId) {
    return CartModel.create({ user: userId, products: [] });
  }

  async addProduct(userId, productId) {
    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return this.create(userId);
    }
    const item = cart.products.find(p => p.product.equals(productId));
    if (item) {
      item.quantity++;
    } else {
      cart.products.push({ product: productId });
    }
    return cart.save();
  }

  async clear(userId) {
    const cart = await CartModel.findOne({ user: userId });
    if (cart) {
      cart.products = [];
      return cart.save();
    }
    return null;
  }
}