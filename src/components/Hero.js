
import React from 'react'
import styled from 'styled-components'
import HeroSlider from './HeroSlider'
const Hero = () => {
    
    const heroData = [
        {
            id:"1",
            image:"https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
            address:"2500 Rue Pinard",
            city:"Montreal",
        },
        {
            id:"2",
            image:"https://images.unsplash.com/photo-1598228723793-52759bba239c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            address:"6550 Rue Otawwa",
            city:"Monreal",
        },
        {
            id:"3",
            image:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            address:"8900 Tachareau",
            city:"Brossard",
        }
    ]

  return (
    <HeroSection>
        <HeroSlider sliderData={heroData} />
    </HeroSection>
  )
}

export default Hero

const HeroSection = styled.div `
    /* position: relative;
    
    height:60vh; */
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width: 100%;
`
