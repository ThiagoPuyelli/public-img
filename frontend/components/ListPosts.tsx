import Post from "./Post";
import type { NextPage, GetStaticProps } from 'next'
import styled from "@emotion/styled";
import { getPosts } from "../services/postServices";
import PostInterface from "../interfaces/PostInterface";

export async function getStaticProps () {
  try {
    const posts = await getPosts(5, 1)
    
    if (!posts) {
      console.log('Posts failed')
    }

    console.log(posts)
    return {
      props: {
        posts
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: { }
    }
  }
}

const ListPosts: NextPage = ({ posts }: any) => {
  console.log(posts)
  const ListStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 20px;
  `

  return (
    <ListStyled>
    </ListStyled>
  )
}

export default ListPosts
