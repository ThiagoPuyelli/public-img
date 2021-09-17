import { Schema, Document, model } from 'mongoose'
import { NextFunction } from 'express'
import UserInterface from '../interfaces/UserInterface'
import bcrypt from 'bcryptjs'

const userSchema = new Schema<UserInterface & Document>({
  username: {
    type: String,
    required: true,
    maxlength: 30,
    minLength: 3
  },
  email: {
    type: String,
    required: true,
    maxlength: 45
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    maxlength: 40
  },
  description: {
    type: String,
    maxLength: 400
  },
  image: {
    type: String,
    maxLength: 40
  },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post',
    default: []
  }
})

userSchema.pre('save', async function (next: NextFunction) {
  if (!this.isModified('password')) return next()

  try {
    const passwordHased = await bcrypt.hash(this.password, 10)
    this.password = passwordHased
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePasswords = async function (password: string) {
  try {
    const comparePassword = await bcrypt.compare(password, this.password)
    return comparePassword
  } catch (err) {
    return false
  }
}

export default model<UserInterface>('User', userSchema)
