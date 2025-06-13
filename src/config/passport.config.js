import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.model.js';
import dotenv from 'dotenv';
dotenv.config();


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use('jwt', new JwtStrategy(opts, async (jwtPayload, done) => {
  try {
    const user = await User.findById(jwtPayload.id);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}));