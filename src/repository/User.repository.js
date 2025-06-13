import UserDAO from '../dao/User.dao.js';
import UserDTO from '../dto/User.dto.js';

class UserRepository {
  async getByEmail(email) {
    const user = await UserDAO.getByEmail(email);
    return user ? new UserDTO(user) : null;
  }

  async getById(id) {
    const user = await UserDAO.getById(id);
    return user ? new UserDTO(user) : null;
  }

  async create(data) {
    const user = await UserDAO.create(data);
    return new UserDTO(user);
  }

  async updatePassword(id, newPassword) {
    const user = await UserDAO.updatePassword(id, newPassword);
    return new UserDTO(user);
  }
}

export default new UserRepository();