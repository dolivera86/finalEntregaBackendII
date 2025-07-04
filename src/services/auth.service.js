import bcrypt from 'bcrypt';
import crypto from 'crypto';
import PersistenceFactory from '../config/persistenceFactory.js';
import Token from '../models/Token.model.js';
import mailer from '../config/mailer.js';

const UserDAO = PersistenceFactory.getUserDao();

class AuthService {
  async register(data) {
    const hashed = await bcrypt.hash(data.password, 10);
    data.password = hashed;
    return await UserDAO.create(data);
  }

  async login(email, password) {
    const user = await UserDAO.getByEmail(email);
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
  }

  async forgotPassword(email) {
    const user = await UserDAO.getByEmail(email);
    if (!user) return;

    const tokenString = crypto.randomBytes(32).toString('hex');
    await Token.create({ userId: user._id || user.id, token: tokenString });

    const link = `${process.env.FRONT_URL}/reset-password/${tokenString}`;
    await mailer.sendMail({
      from: process.env.MAIL_USER,
      to: user.email,
      subject: 'Recuperar contraseña',
      html: `<p>Para restablecer tu contraseña haz click en el siguiente enlace:</p><a href="${link}">Restablecer contraseña</a>`
    });
  }

  async resetPassword(token, newPassword) {
    const tokenData = await Token.findOne({ token });
    if (!tokenData) return false;

    const user = await UserDAO.getById(tokenData.userId);
    if (await bcrypt.compare(newPassword, user.password)) return false;

    const hashed = await bcrypt.hash(newPassword, 10);
    await UserDAO.updatePassword(user._id || user.id, hashed);
    await Token.deleteOne({ _id: tokenData._id });
    return true;
  }
}

export default new AuthService();