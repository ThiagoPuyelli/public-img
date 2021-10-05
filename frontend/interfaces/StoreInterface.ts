export interface AuthInterface {
  isLoading?: boolean
  isAuth?: boolean
  isAuthFailed?: boolean
  token: string
}

export default interface StoreInterface {
  auth: AuthInterface
}