export default class MemoryUserDAO {
  constructor() {
    this.users = [];
    this.currentId = 1;
  }

  async getByEmail(email) {
    return this.users.find(u => u.email === email);
  }

  async getById(id) {
    return this.users.find(u => u.id === id);
  }

  async create(data) {
    const user = { ...data, id: this.currentId++ };
    this.users.push(user);
    return user;
  }

  async updatePassword(id, newPassword) {
    const user = this.users.find(u => u.id === id);
    if (user) {
      user.password = newPassword;
      return user;
    }
    return null;
  }
}