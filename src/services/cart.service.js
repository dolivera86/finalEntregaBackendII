import CartDAO from '../dao/Cart.dao.js';

class CartService {
  async getUserCart(userId) {
    return CartDAO.getByUser(userId);
  }

  async addProduct(userId, productId) {
    return CartDAO.addProduct(userId, productId);
  }

  async clear(userId) {
    return CartDAO.clear(userId);
  }
}

export default new CartService();