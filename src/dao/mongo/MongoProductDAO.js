import ProductModel from '../../models/Product.model.js';

export default class MongoProductDAO {
  async getAll() {
    return ProductModel.find();
  }

  async getById(id) {
    return ProductModel.findById(id);
  }

  async create(data) {
    return ProductModel.create(data);
  }

  async update(id, data) {
    return ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return ProductModel.findByIdAndDelete(id);
  }
}