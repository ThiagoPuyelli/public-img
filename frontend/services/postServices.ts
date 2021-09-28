import axios from 'axios'
import PostInterface from '../interfaces/PostInterface'

export const savePost = (post: PostInterface) => {
  const url = process.env.URL + '/post'
  return axios.post(url, post)
}

export const getPosts = (amount: number, page?: number) => {
  let url = process.env.URL + '/post/' + amount
  if (page) {
    url += '/' + page
  }
  return axios.get(url)
}