import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';

const ContactPage = () => {
  return (
    <ContactSection>
      <NavbarSection>
        <Navbar />
      </NavbarSection>
      <ContactContainer>
        <ContactHeader>
            <h3>Contact Us</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </p>
        </ContactHeader>
        <ContactMainContent>
          <ContactInfo>
              <InfoItem>
                <button><HomeOutlinedIcon /></button>
                <div>
                  <span>555 first st</span>
                  <span>Montreal,Quebec</span>
                  <span>Postal code</span>
                </div>
              </InfoItem>
              <InfoItem>
                <button><PhoneOutlinedIcon /></button>
                <span>514-555-5555</span>
              </InfoItem>
              <InfoItem>
                <button><EmailOutlinedIcon /></button>
                <span>realestate@gmail.com</span>
              </InfoItem>
          </ContactInfo>
          <ContactForm>
              <h3>Send us a message</h3>
              <form>
                <div>
                  <input type="text" placeholder="Name" name="name" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <textarea name="message" cols="30" rows="8" placeholder="Your message">

                </textarea>
                <button type="submit">Send</button>
              </form>
          </ContactForm>
        </ContactMainContent>
      </ContactContainer>
    </ContactSection>
  )
}

export default ContactPage

const ContactSection = styled.section ``
const ContactContainer = styled.div `
  width:90%;
  max-width:1200px;
  margin:auto;
`
const NavbarSection = styled.div `
  background-color: #585B89;
`
const ContactHeader = styled.div `
  text-align: center;
  margin:30px auto;
  max-width: 700px;

  h3{
    margin-bottom: 20px;
    font-size: 1.5rem;
    color:#585B89;
  }
  p{
    letter-spacing: 2px;
  }
`
const ContactMainContent = styled.div `
  width:90%;
  max-width: 1000px;
  margin:auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) ;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  background-color: #F5F5F5;

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`
const ContactInfo = styled.div `
    display:grid;
    place-content:center;
    
`
const ContactForm = styled.div `
  border-radius:10px;
  background-color: #F3F6F7;
  
  max-width: 500px;
  padding:40px 20px;

  h3{
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    
    input {
        width: 100%;
        padding:10px;
        border-radius: 6px;
        border:none;
        outline:none;
        margin-bottom: 10px;
    }
    textarea {
        width:100%;
        border:none;
        outline:none;
        border-radius: 6px;
        padding:10px;
    }
    button {
        margin-top:20px;
        outline:none;
        border:none;
        border-radius: 8px;
        background-color:#585B89;
        color:white;
        cursor:pointer;
        text-transform: uppercase;
        padding:10px 20px;

        &:hover {
            color:#585B89;;
            background-color: white;
            border:1px solid #585B89;
        }
    }
  }
`
const InfoItem = styled.div `
  display: flex;
  align-items: center;
  margin-top:20px;
  span{
    margin-left: 5px;
  }
  button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #585B89;
    border:none;
    outline:none;
    color:white;
  }
`


