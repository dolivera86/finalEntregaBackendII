import authService from '../services/auth.service.js';
import { generateToken } from '../utils/generateToken.js';

export const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await authService.login(req.body.email, req.body.password);
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en login', error: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    await authService.forgotPassword(req.body.email);
    res.json({ message: 'Si el email existe, se ha enviado un correo para resetear la contraseña' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar correo', error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const success = await authService.resetPassword(token, newPassword);
    if (!success) return res.status(400).json({ message: 'No se pudo resetear la contraseña' });
    res.json({ message: 'Contraseña actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al resetear contraseña', error: error.message });
  }
};