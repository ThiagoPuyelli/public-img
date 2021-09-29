import axios from 'axios'
import PostInterface from '../interfaces/PostInterface'
import { env } from '../next.config'

export const savePost = (post: PostInterface) => {
  if (env) {
    const url = env.URL + '/post'
    return axios.post(url, post)
  } else {
    return axios.get('')
  }
}

export const getPosts = (amount: number, page?: number) => {
  if (env) {
    let url = env.URL + '/post/' + amount
    if (page) {
      url += '/' + page
    }
    return axios.get(url)
  } else {
    return axios.get('')
  }
}