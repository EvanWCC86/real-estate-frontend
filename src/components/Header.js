import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@material-ui/icons/Phone';
const Header = () => {
  return (
    <HeaderSection>
        <Container>
            <h3>Real-Estate Demo</h3>
            <p>Notice: It is a demo website for real-estate and unfinished</p>
            <div>
                <span><PhoneIcon /></span>
                <span>Phone Number:</span>
                <span>(555)666-5555</span>
            </div>
        </Container>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header `
    background: #585B89;
    height: 40px;
`

const Container = styled.div `
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin:0 auto;


    h3{
        color:white;
        font-weight: 900;
    }
    p{
        display: none;
        color:white;
        @media screen and (min-width: 750px) {
            display: block;
        }
    }
    div{
        color:white;
        display: flex;
        align-items: center;

        span{
            margin-right:5px;

        }
    }
`
