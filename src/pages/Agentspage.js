import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
const Agentspage = () => {
  return (
    <div>
      <NavbarSection>
        <Navbar />
      </NavbarSection>
      {/* hero page with agents filter by city, */}
      
    </div>
  )
}

export default Agentspage

const NavbarSection = styled.div `
  background-color: #585B89;
`
