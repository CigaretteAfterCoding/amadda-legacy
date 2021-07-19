import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from 'Model/user-model';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done) => {
      try {
        const user = await User.findByEmail(email);
        if (!user) {
          return done(null, false, { message: 'User Not Found' });
        }
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        }
        return done(null, false, { message: 'Invalid Password' });
      } catch (e) {
        return done(e);
      }
    },
  ),
);

export default passport;
