import React from 'react'
import styled from 'styled-components'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
const AgentCard = ({item}) => {
    const {image,title,name,company,email,phone,wechat} = item
  return (
    <AgentContainer>
      <ImageContainer>
          <img src={image} alt={name} />
      </ImageContainer>
      <AgentContent>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{company}</p>
            <footer>
                <div>
                    <PhoneOutlinedIcon />
                    <p>{phone}</p>
                </div>
                <div>
                    <EmailOutlinedIcon />
                    <p>{email}</p>
                </div>
                <div>
                    <ForumOutlinedIcon />
                    <p>wechat:<span>{wechat}</span></p>
                </div>
            </footer>
      </AgentContent>
    </AgentContainer>
  )
}

export default AgentCard

const AgentContainer = styled.div `
    display: flex;
    
    height: 200px;
    max-width:500px;
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
   
    /* margin:0 auto; */
`

const ImageContainer = styled.div `
    flex:0.3;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const AgentContent = styled.div `
    flex:0.7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px;
    footer {
        display: flex;
        justify-content: space-between;

        p{
            font-size:12px;
        }
    }
`
