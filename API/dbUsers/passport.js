const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../dbUsers/model/User');

function initialize(passport) {
    passport.use(new LocalStrategy(async function (username, password, done) {
          let user = await  User.findOne({
                where: {
                    name: username,
                }
            });
           if (user==null){
               return done(null, false, { message: 'No user with that email' });
           }
           try {
               if (await bcrypt.compare(password, user.password)) {
                   return done(null, user)
               } else {
                   return done(null, false, { message: 'Password incorrect' })
               }
           } catch (e) {
               return done(e)
           };
        }
    ));
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => {
        return done(null, user);
    })
}
module.exports = initialize;