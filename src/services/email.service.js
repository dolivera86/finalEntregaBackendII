import transport from '../config/mailer.js';

class EmailService {
  async sendResetPassword(email, token) {
    const link = `${process.env.FRONT_URL}/reset-password/${token}`;
    const html = `
      <h2>Restablecer contraseña</h2>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${link}">Restablecer contraseña</a>
    `;

    return this.sendMail(email, 'Recuperar contraseña', html);
  }

  async sendWelcome(email, name) {
    const html = `
      <h2>¡Bienvenido ${name}!</h2>
      <p>Gracias por registrarte en nuestro ecommerce.</p>
    `;

    return this.sendMail(email, 'Bienvenido a Ecommerce', html);
  }

  async sendMail(to, subject, html) {
    try {
      await transport.sendMail({
        from: process.env.MAIL_USER,
        to,
        subject,
        html
      });
      console.log(`Correo enviado a ${to}`);
      return true;
    } catch (error) {
      console.error(`Error enviando correo a ${to}:`, error);
      return false;
    }
  }
}

export default new EmailService();