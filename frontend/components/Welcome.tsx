import type { NextPage } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'

const Welcome: NextPage = () => {
  const WelcomeStyle = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding-top: 25px;
    .titleWelcome {
      font-family: sans-serif;
      font-size: 45px;
      text-shadow: 0px 0px 8px var(--secondary);
      font-weight: normal;
    }
    .links {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
    .link {
      margin-top: 30px;
      padding: 10px;
      width: 300px;
      border: 2px solid var(--secondary);
      boxShadow: 0px 0px 4px var(--secondary);
      border-radius: 20px;
      font-size: 25px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      transition: 300ms all;
    }
    .link:hover {
      transform: scale(1.2, 1.2);
    }
  `

  return (
    <WelcomeStyle>
      <h1 className='titleWelcome'>Welcome to Public Img</h1>
      <div className='links'>
        <Link href='/login' passHref>
          <div className='link'>
            Login
          </div>    
        </Link>
        <Link href='/register' passHref>
          <div className='link'>
            Register
          </div>
        </Link>
      </div>
    </WelcomeStyle>
  )
}

export default Welcome
