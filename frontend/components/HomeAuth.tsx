import type { NextPage } from 'next'
import ListPosts from './ListPosts'

const HomeAuth: NextPage = () => {
    
  return (
    <div style={{
      width: '600px'
    }}>
      <ListPosts />
    </div>
  )
}

export default HomeAuth
