import { useSelector, useDispatch } from 'react-redux'
import { actionAuthLogin, actionAuthLogout } from '../redux/authReducer'
import { authService } from '../services/authServices'
import StoreInterface from '../interfaces/StoreInterface'
import { AuthInterface } from '../interfaces/UserInterface'

const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(({ auth }: StoreInterface) => auth.token)
  const isAuthFailed = useSelector(({ auth }: StoreInterface) => auth.isAuthFailed)
  const isAuthLoading = useSelector(({ auth }: StoreInterface) => auth.isLoading)
  const tokenJWT = useSelector(({ auth }: StoreInterface) => auth.token)

  const loginUser = async (user: AuthInterface) => {
    dispatch(actionAuthLogin.loading())
    try {
      const result = await authService(user)
      const { token } = result.data.message
      dispatch(actionAuthLogin.success(token))
    } catch (error) {
      dispatch(actionAuthLogin.error())
    }
  }

  const logoutUser = () => {
    dispatch(actionAuthLogout())
  }

  return {
    isAuth,
    isAuthFailed,
    isAuthLoading,
    loginUser,
    logoutUser,
    tokenJWT
  }
}

export default useAuth
