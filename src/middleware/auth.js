import passport from 'passport';

export const authenticate = passport.authenticate('jwt', { session: false });

export const authorize = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};