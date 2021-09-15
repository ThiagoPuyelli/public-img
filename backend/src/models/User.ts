import { Schema, Document, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'

const userSchema = new Schema<Document & UserInterface>({
  username: {
    type: String,
    required: true,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    maxlength: 45
  },
  password: {
    type: String,
    required: true,
    maxlength: 40
  },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post',
    required: true
  }
})

export default model<UserInterface>('User', userSchema)
