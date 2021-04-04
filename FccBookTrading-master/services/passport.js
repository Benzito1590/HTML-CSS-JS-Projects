const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const TwitterStrategy=require("passport-twitter").Strategy
const GithubStrategy = require('passport-github2').Strategy;
const mongoose=require('mongoose')
const keys = require("../config/keys")

const User=mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user)
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ "google.id": profile.id });

      if (existingUser) {
        return done(null, existingUser);
      } 
        const user = await new User({ "google.id": profile.id }).save();
        done(null, user);
      
    }
  )
);
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterCostumerKey,
      consumerSecret: keys.twitterCostumerSecret,
      callbackURL: "/auth/twitter/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ "twitter.id": profile.id });

      if (existingUser) {
        return done(null, existingUser);
      } 
        const user = await new User({ "twitter.id": profile.id }).save();
        done(null, user);
      
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: "/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ "github.id": profile.id });

      if (existingUser) {
        return done(null, existingUser);
      } 
        const user = await new User({ "github.id": profile.id }).save();
        done(null, user);
      
    }
  )
);