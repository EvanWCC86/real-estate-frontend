// import {AiOutlineHome,AiOutlineProject,AiOutlineContacts} from 'react-icons/ai'

// import {GiSkills} from 'react-icons/gi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import HomeIcon from '@material-ui/icons/Home';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
export const navbarData = [
    {
        name:"home",
        url:"/",
        icon:<HomeIcon />
    },
    {
        name:"about",
        url:"/about",
        icon:<PersonPinOutlinedIcon />,
    },
    {
        name:"properties",
        url:"/properties",
        icon:<DomainOutlinedIcon  />
    },
    {
        name:"agents",
        url:"/agents",
        icon:<GroupOutlinedIcon />
    },
    {
        name:"contact",
        url:"/contact",
        icon:<ContactPhoneOutlinedIcon />
    },
]