const passport = require('passport');
const passportJwt = require('passport-jwt');
const UserModel = require('../DAL/shemas/user');

const JwtStrategy = passportJwt.Strategy;
const secret = 'fjS!g8fgnsdjwKHFD3nfs8nla&m9n3ms';

let jwtStrategyOptions = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
  secretOrKey: secret
};

passport.use(
  new JwtStrategy(jwtStrategyOptions, function(jwt_payload, done) {
    UserModel.findById(jwt_payload.id)
      .exec()
      .then(user => {
        if (user) return done(null, user);
        else return done(null, false);
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports.secret = secret;
module.exports.passport = passport;
