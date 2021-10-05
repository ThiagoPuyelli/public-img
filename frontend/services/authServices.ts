import axios from 'axios'
import { AuthInterface } from '../interfaces/UserInterface'
import { env } from '../next.config'

export const authService = (body: AuthInterface) => {
  try {
    if (env) {
      const encode = window.btoa(body.email + ':' + body.password)
      return axios.post(env.URL + '/auth/sign-in', {}, {
        headers: {
          'Authorization': 'Basic ' + encode
        }
      })
    } else {
      return axios.get('')
    }
  } catch (err) {
    console.log(err)
    return axios.get('')
  }
}
