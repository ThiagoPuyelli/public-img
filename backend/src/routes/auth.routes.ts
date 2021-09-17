import jwt from 'jsonwebtoken'
import User from '../models/User'
import { Router } from 'express'
import validatorReq from '../middlewares/validatorReq'
import { userSign } from '../validators/users'
import sendResponse from '../utils/sendResponse'
import multer from '../middlewares/multer'
import fs from 'fs'
import path from 'path'
const router = Router()

router.post('/sign-up', multer.single('image'), validatorReq(userSign, 'body'), async (req, res) => {
  try {
    const verifyEmail = await User.findOne({ email: req.body.email })
    if (verifyEmail) {
      await fs.unlinkSync(path.join(__dirname, '/../uploads/' + req.file.filename))
      return sendResponse(res, 401, 'The email is already used')
    }
      
    const user = await User.create(req.body)

    if (!user) {
      return sendResponse(res, 500, 'Error to save user')
    }

    const token = jwt.sign({userID: user._id}, process.env.JWT_PASSWORD, {
      expiresIn: '1d'
    })

    return sendResponse(res, 200, { token })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router
