import passport from 'passport';

export const authenticate = passport.authenticate('jwt', { session: false });

export const authorize = (roles = []) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
  }
  next();
};