export default class MemoryCartDAO {
  constructor() {
    this.carts = [];
    this.currentId = 1;
  }

  async getByUser(userId) {
    return this.carts.find(c => c.user === userId);
  }

  async create(userId) {
    const cart = { id: this.currentId++, user: userId, products: [] };
    this.carts.push(cart);
    return cart;
  }

  async addProduct(userId, productId) {
    let cart = this.carts.find(c => c.user === userId);
    if (!cart) {
      cart = await this.create(userId);
    }
    const item = cart.products.find(p => p.product === productId);
    if (item) {
      item.quantity++;
    } else {
      cart.products.push({ product: productId, quantity: 1 });
    }
    return cart;
  }

  async clear(userId) {
    const cart = this.carts.find(c => c.user === userId);
    if (cart) {
      cart.products = [];
      return cart;
    }
    return null;
  }
}