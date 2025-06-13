import User from '../models/User.model.js';

class UserDAO {
  async getByEmail(email) {
    return User.findOne({ email });
  }
  async getById(id) {
    return User.findById(id);
  }
  async create(data) {
    return User.create(data);
  }
  async updatePassword(id, newPassword) {
    return User.findByIdAndUpdate(id, { password: newPassword }, { new: true });
  }
}

export default new UserDAO();