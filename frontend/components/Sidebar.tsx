import type { NextPage } from 'next'
import styled from '@emotion/styled'
import PostSide from './PostSide'

const Sidebar: NextPage = () => {
  const SidebarStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 10px;
    width: 300px;
    margin-top: 30px; 
    border: 2px solid var(--secondary);
  `
    
  return (
    <SidebarStyled>
      <h3>Posts with more likes</h3>
      <PostSide />
      <PostSide />
      <PostSide />
    </SidebarStyled>
  )
}

export default Sidebar
