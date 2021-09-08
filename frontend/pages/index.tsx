import type { NextPage } from 'next'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import HomeAuth from '../components/HomeAuth'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly'
      }}>
        <HomeAuth />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Home
