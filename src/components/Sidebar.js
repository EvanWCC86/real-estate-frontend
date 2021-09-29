import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloseIcon from '@material-ui/icons/Close';
import {navbarData} from '../data/navbarData'
import styled from 'styled-components'
const Sidebar = ({showSidebar, toggleSidebar}) => {
    return (
        <SidebarSection showSidebar={showSidebar}>
          <SidebarContainer>
               <SidebarTop>
                   
                   <h3>EvanWeb</h3>
                   <button>
                    <CloseIcon style={{ color:"#585B89" }} onClick={toggleSidebar} />
                   </button>
               </SidebarTop>
               <SidebarCenter>
                   {navbarData.map((item, index) => (
                       <li key={index}>
                           <button>{item.icon}</button>
                           <Link onClick={toggleSidebar} to={item.url}>{item.name}</Link>
                        </li>
                   ))}
                    
                   
                </SidebarCenter>
                <SidebarFooter>
                    <span><FacebookIcon style={{ color:"#585B89" }} /></span>
                    <span><TwitterIcon style={{ color:"#585B89" }} /></span>
                    <span><LinkedInIcon style={{ color:"#585B89" }} /></span>
                    <span><InstagramIcon style={{ color:"#585B89" }} /></span>
                    
                </SidebarFooter>
           </SidebarContainer>
        </SidebarSection>
    )
}

export default Sidebar

const SidebarSection = styled.div `
    width:50%;
    height:100vh;
    background-color:white;
    position:fixed;
    top:0;
    left: 0;
    z-index: 10000;
    transform: ${props => props.showSidebar ? "translateX(0)" :"translateX(-100%)"};
    transition: all 0.3s ease-out;
    
`
const SidebarContainer = styled.div `
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* width:90%;
    margin:0 auto; */
    
`
const SidebarTop = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
   
    background-color: #F4F6F7;
    width:100%;
    padding-left: 10px;
    padding-right: 10px;

    button{
        border:none;
        outline:none;
        background-color: transparent;
        cursor:pointer;
    }
`
const SidebarCenter = styled.ul `


    li {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }
    a{
        text-decoration: none;
        margin-left: 10px;
        text-transform: capitalize;
        color:gray;

        &:hover{
            color:#595C89;
            font-weight:bold;
        }
    }
    button{
        background-color:#585B89;
        color:white;
        border:none;
        outline:none;
        margin-left:10px;
        border-radius: 6px;
    }
`
const SidebarFooter = styled.div `
    margin-bottom:20px;
    display:flex;
    justify-content: center;
`