import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import PersistenceFactory from './persistenceFactory.js';

dotenv.config();

const UserDAO = PersistenceFactory.getUserDao();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use('jwt', new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await UserDAO.getById(jwt_payload._id);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

export default passport;