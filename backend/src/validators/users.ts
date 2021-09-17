import genValidator from '../utils/genValidator'
import joi from 'joi'

export const userSign = joi.object({
  username: genValidator('string', true, { max: 30, min: 3 }),
  email: genValidator('string', true, { max: 50 }).email(),
  password: genValidator('string', true, { min: 4, max: 40 }),
  description: genValidator('string', false, { max: 400 })
})
