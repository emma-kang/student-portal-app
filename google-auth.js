/**
 * Seneca Course Search Web Application
 * Author: Yuseon Kang, Sungjun Hong, Michael Phuong and Cheolryeong Lee
 * Date: 2018-09-07
 * google-auth.js
**/
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: 'google-clientID',
        clientSecret: 'client-secret',
        callbackURL: 'http://localhost:8080/auth/google/callback'
    },
    (token, refereshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};