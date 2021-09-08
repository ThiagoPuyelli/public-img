import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import Like from '../public/like.svg'

const PostSide: NextPage = () => {
  const PostSideStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px; 
    padding: 10px;
    border: 1px solid var(--primary);
    border-radius: 20px; 
    .contentPostSide {
      display: flex;
      flex-flow: column wrap;
      width: 100%;
      .imagePostSide {
        position: relative;
        width: 100%;
        height: 150px;
        margin-right: 10px;
      }
      .likesAauthor {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .authorPost {
          margin-right: 10px;
        }
        .likes {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          p {
            margin-left: 5px;
          }
        }
        .likes .imageLikesPost {
          width: 30px;
        }
      }
    }
  `
    
  return (
    <PostSideStyled>
      <div className="contentPostSide">
        <div className="imagePostSide">
          <Image src='https://res.cloudinary.com/dojbtunze/image/upload/v1628287326/wallhaven-ymk8wd_mxfhtu.png' layout='fill' alt='Image post' />
        </div>
        <div className="likesAauthor">
          <div className="likes">
            <div className="imageLikesPost">
              <Image src={Like} alt='Logo likes' />
            </div>
            <p>20</p>
          </div>
          <p className='authorPost'>Dueño</p>
        </div>
      </div>
    </PostSideStyled>  
  )
}

export default PostSide
