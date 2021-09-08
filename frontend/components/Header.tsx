import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Link from 'next/link'

const Header: NextPage = () => {
  const HeaderStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    .linksLeft {
      display: flex;
      flex-flow: row wrap;
    }
    .linksLeft .buttonHeader {
      margin-right: 10px;
    }
    .buttonHeader {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      .linkHeader * {
        background: transparent;
        border: none;
        font-size: 18px;
        color: black;
        cursor: pointer;
        margin-top: 2px; 
      }
      .barLink {
        transition: 300ms all;
        height: 3px;
        width: 0px;
        background: var(--primary);
      }
    }
    .buttonHeader:hover .barLink {
      width: 100%;
    }
  `
  return (
    <HeaderStyle>
      <div className="linksLeft">
        <div className="buttonHeader">
          <div className="linkHeader">
            <Link href='/' passHref>Public Img</Link>
          </div>
          <div className="barLink"></div>
        </div>
        <div className="buttonHeader">
          <div className="linkHeader">
            <Link href='/profile' passHref>Profile</Link>
          </div>
          <div className="barLink"></div>
        </div>
      </div>
      <div className="buttonHeader">
        <div className="linkHeader">
          <button>Logout</button>
        </div>
        <div className="barLink"></div>
      </div>
    </HeaderStyle>
  )
}

export default Header
