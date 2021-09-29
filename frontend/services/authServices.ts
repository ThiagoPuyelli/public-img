import axios from 'axios'
import { AuthInterface } from '../interfaces/UserInterface'
import { env } from '../next.config'

export const authService = (body: AuthInterface) => {
  try {
    if (env) {
      return axios.post(env.URL + '/sign-in', body)
    } else {
      return axios.get('')
    }
  } catch (err) {
    console.log(err)
    return axios.get('')
  }
}
