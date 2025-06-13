export class User {
  constructor({ first_name, last_name, email, age, password, cart = null, role = 'user' }) {
    this._id = User.incrementId();
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.password = password;
    this.cart = cart;
    this.role = role;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}