import type { NextPage } from 'next'
import Welcome from '../components/Welcome'
import { useSelector } from 'react-redux'
import StoreInterface from '../interfaces/StoreInterface'
import HomeAuth from '../components/HomeAuth'

const Home: NextPage = () => {
  const { token } = useSelector((state: StoreInterface) => state.auth)
  
  return (
    <div>
      {!token ? <Welcome /> : <HomeAuth />}
    </div>
  )
}

export default Home
