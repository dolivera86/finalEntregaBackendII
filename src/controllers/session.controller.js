import { User } from '../models/User.js';
import { createHash, isValidPassword } from '../utils/hash.js';
import { generateToken } from '../utils/generateToken.js';
import { users } from '../config/passport.js';

export const register = (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  if (users.some(u => u.email === email)) {
    return res.status(400).json({ error: 'Usuario ya registrado' });
  }

  const newUser = new User({
    first_name,
    last_name,
    email,
    age,
    password: createHash(password)
  });

  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado exitosamente' });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !isValidPassword(user, password)) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = generateToken(user);
  res.json({ token });
};


export const current = (req, res) => {
  res.json({ user: req.user });
};