import genValidator from '../utils/genValidator'
import joi from 'joi'

export const savePost = (required: boolean) => {
  return joi.object({
    description: genValidator('string', false, { max: 400 }),
    title: genValidator('string', required, { max: 30 })
  })
}
