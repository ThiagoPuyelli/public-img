import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Footer: NextPage = () => {
  const FooterStyle = styled.footer`
    border-top: 3px solid var(--secondary);
    box-shadow: 0px 0px 4px var(--secondary);
    padding: 30px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 20px;
  `
    
  return (
    <FooterStyle>
        Web hecha por Thiago Puyelli
    </FooterStyle>
  )
}

export default Footer
