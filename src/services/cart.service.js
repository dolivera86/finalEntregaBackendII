import CartRepository from '../repository/Cart.repository.js';

class CartService {
  async getUserCart(userId) {
    return CartRepository.getByUser(userId);
  }

  async addProduct(userId, productId) {
    return CartRepository.addProduct(userId, productId);
  }

  async clear(userId) {
    return CartRepository.clear(userId);
  }
}

export default new CartService();