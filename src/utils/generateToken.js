import jwt from 'jsonwebtoken';

export const generateToken = user => {
  const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
    first_name: user.first_name,
    last_name: user.last_name
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};