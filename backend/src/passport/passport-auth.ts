import { BasicStrategy } from 'passport-http'
import passport from 'passport'
import User from '../models/User'

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
  })


  passport.use('login', new BasicStrategy(async (email, password, done) => {
    try {
      const findUser = await User.findOne({ email })

      if (!findUser) {
        return done(null, false)
      }

      const verifyPassword = await findUser.comparePasswords(password)

      if(!verifyPassword) {
        return done(null, false)
      }

      return done(null, findUser)

    } catch (err) {
      return done(null, false)
    }
  }))
}