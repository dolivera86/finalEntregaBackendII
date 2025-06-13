import authService from '../services/auth.service.js';
import { generateToken } from '../utils/token.js';

export const register = async (req, res) => {
  const user = await authService.register(req.body);
  res.status(201).json(user);
};

export const login = async (req, res) => {
  const user = await authService.login(req.body.email, req.body.password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = generateToken(user);
  res.json({ token });
};

export const forgotPassword = async (req, res) => {
  await authService.forgotPassword(req.body.email);
  res.json({ message: 'Si existe, se envió email para resetear' });
};

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  const ok = await authService.resetPassword(token, newPassword);
  if (!ok) return res.status(400).json({ message: 'No se pudo resetear' });
  res.json({ message: 'Contraseña actualizada' });
};