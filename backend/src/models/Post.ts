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
    required: false,
    maxlength: 400
  },
  image: {
    type: String,
    required: true,
    maxlength: 30
  },
  likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    required: true,
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export default model<PostInterface & Document>('Post', postSchema)
