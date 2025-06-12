import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

const users = [];

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use('jwt', new JwtStrategy(opts, (jwt_payload, done) => {
  try {
    const user = users.find(u => u._id === jwt_payload._id);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

export default passport;
export { users };