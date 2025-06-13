import Cart from '../models/Cart.model.js';

class CartDAO {
  async getByUser(userId) {
    return Cart.findOne({ user: userId }).populate('products.product');
  }

  async create(userId) {
    return Cart.create({ user: userId, products: [] });
  }

  async addProduct(userId, productId) {
    const cart = await Cart.findOne({ user: userId });
    const item = cart.products.find(p => p.product.equals(productId));
    if (item) {
      item.quantity++;
    } else {
      cart.products.push({ product: productId });
    }
    return cart.save();
  }

  async clear(userId) {
    const cart = await Cart.findOne({ user: userId });
    cart.products = [];
    return cart.save();
  }
}

export default new CartDAO();