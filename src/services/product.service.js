import ProductRepository from '../repository/Product.repository.js';

class ProductService {
  getAll() {
    return ProductRepository.getAll();
  }

  getById(id) {
    return ProductRepository.getById(id);
  }

  create(data) {
    return ProductRepository.create(data);
  }

  update(id, data) {
    return ProductRepository.update(id, data);
  }

  delete(id) {
    return ProductRepository.delete(id);
  }
}

export default new ProductService();