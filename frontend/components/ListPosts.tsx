import Post from "./Post";
import type { NextPage } from 'next'
import styled from "@emotion/styled";

const ListPosts: NextPage = () => {
  const ListStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 20px;
  `

  return (
    <ListStyled>
      <Post />
      <Post />
      <Post />
      <Post />
    </ListStyled>
  )
}

export default ListPosts
