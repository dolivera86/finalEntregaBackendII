import CartDAO from '../dao/Cart.dao.js';

class CartRepository {
  async getByUser(userId) {
    return CartDAO.getByUser(userId);
  }

  async create(userId) {
    return CartDAO.create(userId);
  }

  async addProduct(userId, productId) {
    return CartDAO.addProduct(userId, productId);
  }

  async clear(userId) {
    return CartDAO.clear(userId);
  }
}

export default new CartRepository();