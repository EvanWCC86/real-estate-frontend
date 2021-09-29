import React from 'react'
import styled from 'styled-components'
const Subscribe = () => {
  return (
    <SubscribeContainer>
        <h1>Join With Us!</h1>
        <p>Subscribe to Evanstore to receive updates on new arrivals, special offers and other discount information.</p>
        <form>
            <input type="email" name="email" placeholder="Your email..." />
            <button type="submit">subscribe</button>
        </form>
    </SubscribeContainer>
  )
}

export default Subscribe

const SubscribeContainer = styled.section `
  height: 100%;
  width: 90%;
  max-width:500px;
  margin:auto;
  display: grid;
  place-items: center;

  h1{
    font-size: 3rem;
  }
  p{
    font-size: 1.5rem;
    color:gray;
  }
  form {
    border: 1px solid gray;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    button{
      border:none;
      outline: none;
      padding:10px;
      text-transform:uppercase;
      background-color:#585B89;
      cursor:pointer;
      color:white;
      &:hover {
        background-color: white;
        color:#585B89;
        border:1px solid #585B89;
      }
    }
  }
  input{
    border:none;
    outline: none;
    padding:10px;
    width: 100%;
    

  }
`
