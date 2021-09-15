import express, { Application } from 'express'
import passport from 'passport'
import session from 'express-session'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import { connect } from 'mongoose'

export class App {
  public app: Application = express()

  constructor () {
    config()
    this.setMiddlewares()
    this.connectDatabase()
  }

  setMiddlewares () {
    this.app.set('port', 4500)

    this.app.use(cors('http://localhost:3000'))
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    this.app.use(session({
      secret: process.env.SECRET_SESSION,
      resave: false,
      saveUninitialized: false
    }))
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  connectDatabase () {
    try {
      connect(process.env.MONGODB_URI, (err) => {
        if (err) {
          console.log('error to database, ' + err)
        } else {
          console.log('Database connected')
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}