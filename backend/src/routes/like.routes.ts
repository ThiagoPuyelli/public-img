import passport from 'passport'
import { Router } from 'express'
import sendResponse from '../utils/sendResponse'
import Post from '../models/Post'
const router = Router()

router.post('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return sendResponse(res, 500, 'Error to find post')
    }

    if (String(post.user) === String(req.user._id)) {
      return sendResponse(res, 401, 'Is your post')
    }

    if (!post.likes || post.likes.length === 0) {
      post.likes = []
    } else {
      for (const i in post.likes) {
        if (String(post.likes[i]) === String(req.user._id)) {
          return sendResponse(res, 401, 'The post is already liked for you')
        }
      }
    }

    post.likes.push(req.user._id)

    const postUpdate = await post.save()

    if (!postUpdate) {
      return sendResponse(res, 500, 'Error to save like')
    }

    return sendResponse(res, 200, 'Post liked')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.delete('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return sendResponse(res, 500, 'Error to find post')
    }

    if (String(post.user) === String(req.user._id)) {
      return sendResponse(res, 401, 'Is your post')
    }

    let verify: boolean = false

    post.likes = post.likes.filter(l => {
      if (String(l) !== String(req.user._id)) {
        return l
      } else {
        verify = true
        return false
      }
    })

    if (!verify) {
      return sendResponse(res, 500, 'Your don\'t like post')
    }

    const postUpdated = await post.save()

    if (!postUpdated) {
      return sendResponse(res, 500, 'Error to delete like')
    }

    return sendResponse(res, 200, 'Like deleted')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router
