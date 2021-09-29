import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
const AboutPage = () => {
  return (
    <AboutSection>
      <NavbarSection>
        <Navbar />
      </NavbarSection>
      <AboutContainer>
        <AboutTop>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </AboutTop>
        <MainContent>
          <AboutLeft>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>More Detail</button>
          </AboutLeft>
          <AboutRight>
              <img src="../../images/pic1s.svg" alt="about us" />
          </AboutRight>
        </MainContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default AboutPage

const AboutSection = styled.section ``
const AboutContainer = styled.div `
  width:90%;
  max-width:1200px;
  margin:auto;
`
const NavbarSection = styled.div `
  background-color: #585B89;
`
const AboutTop = styled.div `
  text-align: center;
  margin:30px auto;
  max-width: 700px;
`
const MainContent = styled.div `
  display:grid;
  grid-template-columns: 1fr;
  grid-gap:20px;

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`
const AboutLeft = styled.div `
  text-align: center;

  h3{
    margin-bottom: 20px;
  }
  p{
    letter-spacing: 1.5px;
    color:gray;
  }
  button{
    padding:8px 20px;
    background-color:#585B89;
    color:white;
    text-transform: uppercase;
    border:none;
    outline:none;
    margin-top:15px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      color:#585B89;
      background: white;
      border:1px solid #585B89;
    }
  }
`
const AboutRight = styled.div `

  img{
    width:100%;
  }
`
