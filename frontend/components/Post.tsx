import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import noLike from '../public/noLike.svg'

const Post: NextPage = () => {
  const PostStyled = styled.div`
    padding: 20px;
    width: 500px;
    box-shadow: 0px 0px 4px var(--secondary);
    border: 2px solid var(--secondary);
    margin: 20px;
    .imagePost * {
      position: relative !important;
      width: 100%;
      height: 250px;
    }
    .likes {
      display: flex;
      margin-top: 20px; 
      flex-flow: row wrap;
      align-items: center;
      .heart {
        width: 40px;
        transition: 300ms all;
        cursor: pointer;
      }
      .heart:hover {
        transform: scale(1.2, 1.2);
      }
      p {
        font-size: 20px;
        color: black;
        margin-left: 5px;
      }
    }
    .descPost {
      font-size: 18px;
    }
    .author {
      text-align: right;
    }
  `
  return (
    <PostStyled>
      <div className='imagePost'>
        <Image src='https://res.cloudinary.com/dojbtunze/image/upload/v1628287326/wallhaven-ymk8wd_mxfhtu.png' layout='fill' alt='Imagen del post' />
      </div>
      <div className='likes'>
        <div className='heart'>
          <Image src={noLike} alt='Like' />
        </div>
        <p>20</p>
      </div>
      <p className='descPost'>Pie de foto brodel</p>
      <p className='author'>Dueño</p>
    </PostStyled>
  )
}

export default Post
