import Post from "./Post";
import type { NextPage } from 'next'
import styled from "@emotion/styled";

const ListPosts: NextPage = () => {
  const ListStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
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
