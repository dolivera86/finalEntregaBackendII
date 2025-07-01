import PersistenceFactory from '../config/persistenceFactory.js';
import { createHash, isValidPassword } from '../utils/hash.js';
import { generateToken } from '../utils/generateToken.js';

// obtenemos el UserDAO desde la factory
const UserDAO = PersistenceFactory.getUserDao();

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    const existing = await UserDAO.getByEmail(email);
    if (existing) {
      return res.status(400).json({ error: 'Usuario ya registrado' });
    }

    const newUser = await UserDAO.create({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password),
      role: 'user'
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error en registro', details: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserDAO.getByEmail(email);

    if (!user || !isValidPassword(user, password)) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en login', details: error.message });
  }
};

export const current = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario actual' });
  }
};