import React,{useState,useEffect} from 'react'
import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'
import {navbarData} from '../data/navbarData'
import MenuIcon from '@material-ui/icons/Menu';
import {useGlobalContext} from '../globalContext'
const Navbar = () => {
    const [show, handleShow] = useState(false)
    const {toggleSidebar} = useGlobalContext();
    useEffect(() => {
        const scrollEffect = () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        }
        window.addEventListener("scroll", scrollEffect)
            
       
        return () => {
            window.removeEventListener("scroll", scrollEffect)
        }
    },[])
  return (
    <NavbarSection show={show}>
        <NavbarContainer>
            <NavLeft>
                <h1>Evanweb</h1>
            </NavLeft>
            <NavCenter>
                {navbarData.map((item) => (
                    <li key={item.name}>
                        <Link to={item.url}>{item.name}</Link>
                    </li>
                ))}
            </NavCenter>
            <Navright onClick={toggleSidebar}>
                <MenuIcon />
            </Navright>
        </NavbarContainer>
    </NavbarSection>
  )
}

export default Navbar

const NavbarSection = styled.nav `
    /* position:absolute; */
    height: 60px;
    /* background-color:transparent ; */
    /* color:black; */
    width: 100%;
    /* z-index: 1000; */

    ${props => props.show && css `
        background-color: black;
        position:fixed;
        top:0;
        z-index: 100;
        width: 100%;
        color:white;
        button{
            color:white;
            
        }

    `}
`
const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    max-width: 1200px;
    margin:0 auto;
    height: 100%;
`
const NavLeft = styled.div `
    h1{
        color:lightblue;
        font-weight: bold;
    }
`
const NavCenter = styled.ul `
    display:none;
    flex: 1;
    margin-left: 30px;
    @media screen and (min-width: 680px){
        display:flex;

        li{
            list-style: none;
            margin-right: 10px;
        }
        a{
            text-decoration: none;
            color:white;
            text-transform:capitalize;
            font-size: 1.1rem;
            font-weight: bold;
            &:hover{
            color:lightblue;
        }
        }
    }
`
const Navright = styled.button `
    border:none;
    outline:none;
    background-color: transparent;
    cursor: pointer;
    color:white;
    
    &:hover{
        color:lightblue;
    }

    @media screen and (min-width: 680px) {
        display:none;
    }
`
