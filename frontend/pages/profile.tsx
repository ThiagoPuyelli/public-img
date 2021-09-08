import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'
import React from 'react'
import ListPosts from '../components/ListPosts'

const Profile: NextPage = () => {
  const ProfileStyled = styled.div`
    padding: 30px;
    padding-left: 70px;
    padding-right: 70px;
    .dataProfile {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      .avatar {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        .imageProfile {
          width: 200px;
          height: 200px;
        }
        .imageProfile * {
          border-radius: 30px;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      }
      .stats {
        display: flex;
        flex-flow: row wrap;
        padding-left: 30px;
        .stat {
          margin: 20px;
          text-align: center;
        }
      }
    }
  `
    
  return (
    <React.Fragment>
      <Header />    
      <ProfileStyled>
        <div className="dataProfile">
          <div className='avatar'>
            <h1 className='usernameProfile'>Nombre de usuario</h1>
            <div className='imageProfile'>
              <Image layout='fill' alt='Foto de perfil' src='https://res.cloudinary.com/dojbtunze/image/upload/v1628287326/wallhaven-ymk8wd_mxfhtu.png' />
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <h2 className="titleStat">
                Publicaciones
              </h2>
              <p className='valueStat'>10</p>
            </div>
            <div className="stat">
              <h2 className="titleStat">
                Me gustas
              </h2>
              <p className='valueStat'>35</p>
            </div>
          </div>
        </div>
        <p className='descriptionProfile'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi veritatis sit doloribus, dolorem tempore illum rerum esse distinctio dolorum ipsa, omnis nemo, alias cumque quis ad saepe consequuntur similique. Laudantium beatae accusamus saepe vel mollitia, nihil, tenetur ipsa voluptatum tempore reiciendis, quaerat rerum excepturi facere maiores eveniet dolores repellendus?</p>
        <ListPosts />
      </ProfileStyled>
      <Footer />  
    </React.Fragment>
  )
}

export default Profile
