import { Schema, Document, model } from 'mongoose'
import PostInterface from '../interfaces/PostInterface'

const postSchema = new Schema<Document & PostInterface>({
  title: {
    type: String,
    required: true,
    maxlength: 30
  },
  description: {
    type: String,
    required: true,
    maxlength: 400
  },
  image: {
    type: String,
    required: true,
    maxlength: 30
  }
})

export default model<PostInterface>('Post', postSchema)
