import UserModel from '../../models/User.model.js';

export default class MongoUserDAO {
  async getByEmail(email) {
    return UserModel.findOne({ email });
  }

  async getById(id) {
    return UserModel.findById(id);
  }

  async create(data) {
    return UserModel.create(data);
  }

  async updatePassword(id, newPassword) {
    return UserModel.findByIdAndUpdate(id, { password: newPassword }, { new: true });
  }
}