import ProductDAO from '../dao/Product.dao.js';

class ProductService {
  getAll() {
    return ProductDAO.getAll();
  }

  getById(id) {
    return ProductDAO.getById(id);
  }

  create(data) {
    return ProductDAO.create(data);
  }

  update(id, data) {
    return ProductDAO.update(id, data);
  }

  delete(id) {
    return ProductDAO.delete(id);
  }
}

export default new ProductService();