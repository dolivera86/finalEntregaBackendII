import ProductDAO from '../dao/Product.dao.js';

class ProductRepository {
  async getAll() {
    return ProductDAO.getAll();
  }

  async getById(id) {
    return ProductDAO.getById(id);
  }

  async create(data) {
    return ProductDAO.create(data);
  }

  async update(id, data) {
    return ProductDAO.update(id, data);
  }

  async delete(id) {
    return ProductDAO.delete(id);
  }
}

export default new ProductRepository();