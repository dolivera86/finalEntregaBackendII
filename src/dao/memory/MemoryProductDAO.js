export default class MemoryProductDAO {
  constructor() {
    this.products = [];
    this.currentId = 1;
  }

  async getAll() {
    return this.products;
  }

  async getById(id) {
    return this.products.find(p => p.id === id);
  }

  async create(data) {
    const product = { ...data, id: this.currentId++ };
    this.products.push(product);
    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...data };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    const deleted = this.products.splice(index, 1);
    return deleted[0];
  }
}