import React from 'react'
import styled from 'styled-components'
const FindSellHomeCard = ({item}) => {
  return (
    <Container>
        <img src={item.image} alt={item.title} />
        <Content>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>{item.buttonText}</button>
        </Content>
    </Container>
  )
}

export default FindSellHomeCard

const Container = styled.div `
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
    
    img {
          width: 100%;
          object-fit: cover;
          height: 300px;
          padding:20px;
      }
`
const Content = styled.div `
    padding:20px;
    
    h3{
        text-transform: capitalize;
        font-size: 1.3rem;

    }
    p{
        margin:10px auto;
    }
    button{
        text-transform: capitalize;
        padding:10px 12px;
        border-radius: 6px;
        border:none;
        outline:none;
        background:#585B89;
        color:white;
        font-weight: bold;
    }
`

