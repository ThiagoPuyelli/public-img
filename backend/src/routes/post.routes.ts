import passport from 'passport'
import Post from '../models/Post'
import { savePost } from '../validators/posts'
import validatorReq from '../middlewares/validatorReq'
import { Router } from 'express'
import sendResponse from '../utils/sendResponse'
import fs from 'fs'
import path from 'path'
import multer from '../middlewares/multer'
import pagination from '../utils/pagination'
import User from '../models/User'
const router = Router()

router.get('/find/:amount/:page?', passport.authenticate('token'), async (req, res) => {
  try {
    let { amount, page } = req.params
    if (!page) {
      page = '1'
    }
    const posts = await Post.find()

    if (parseInt(amount) >= posts.length) {
      return sendResponse(res, 200, {
        posts,
        numberPages: 0
      })
    }

    const { data, pages } = pagination(posts, parseInt(page), parseInt(amount))

    return sendResponse(res, 200, {
      posts: data,
      numberPages: pages
    })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.get('/id/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return sendResponse(res, 500, 'Error to find post')
    }

    return sendResponse(res, 200, { post })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.get('/user', passport.authenticate('token'), async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    const { posts }: any = await user.populate('posts')

    if (!posts) {
      return sendResponse(res, 500, 'Error to find posts')
    }

    return sendResponse(res, 200, { posts })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.post('/',
  passport.authenticate('token'),
  multer.single('image'),
  validatorReq(savePost(true), 'body'),
  async (req, res) => {
    try {
      if (!req.file.filename) {
        return sendResponse(res, 404, 'Your image is undefined')
      }

      const newPost = await Post.create({
        ...req.body,
        image: req.file.filename,
        user: req.user._id
      })

      if (!newPost) {
        return sendResponse(res, 500, 'Error to save post')
      }
      req.user.posts.push(newPost._id)

      const userUpdate = await User.findByIdAndUpdate(req.user._id, { posts: req.user.posts })

      if (!userUpdate) {
        return sendResponse(res, 500, 'Error to add post in user')
      }

      return sendResponse(res, 200, 'Post saved')
    } catch (err) {
      return sendResponse(res, 500, err.message || 'Server error')
    }
  })

router.put('/:id',
  passport.authenticate('token'),
  multer.single('image'),
  validatorReq(savePost(false), 'body'),
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post) {
        return sendResponse(res, 500, 'postID undefined')
      }

      if (String(post.user) !== String(req.user._id)) {
        return sendResponse(res, 401, 'Not is your post')
      }

      if (req.file) {
        await fs.unlinkSync(path.join(__dirname, '/../uploads/' + post.image))
        post.image = req.file.filename
      }

      if (Object.keys(req.body).length > 0) {
        for (const i in req.body) {
          post[i] = req.body[i]
        }
      }

      const updatePost = await post.save()

      if (!updatePost) {
        return sendResponse(res, 500, 'Error to modify post')
      }

      return sendResponse(res, 200, 'Post updated')
    } catch (err) {
      return sendResponse(res, 500, err.message || 'Server error')
    }
  })

router.delete('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return sendResponse(res, 500, 'postID undefined')
    }

    if (String(post.user) !== String(req.user._id)) {
      return sendResponse(res, 500, 'Not is your post')
    }

    await fs.unlinkSync(path.join(__dirname, '/../uploads/' + post.image))

    const postDelete = await Post.findByIdAndRemove(post._id)

    if (!postDelete) {
      return sendResponse(res, 500, 'Error to delete post')
    }

    req.user.posts = req.user.posts.filter(p => {
      if (String(p) !== String(post._id)) {
        return p
      } else {
        return false
      }
    })

    const userUpdate = await User.findByIdAndUpdate(req.user._id, { posts: req.user.posts })
    if (!userUpdate) {
      return sendResponse(res, 500, 'Error to delete post in your user')
    }

    return sendResponse(res, 200, 'Post deleted')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router
