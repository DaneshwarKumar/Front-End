import React from 'react';
import {AppBar , Toolbar , styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
 background:black;
`;

const Tab = styled(NavLink)`
font-size:20px;
margin-right: 20px;
font-family: monospace;
color:inherit;
text-decoration:none;
`;

const LogoStyle = {
  fontSize:30,
  color: "tomato",
  marginRight: "auto",
  fontFamily: "monospace",
  fontWeight: "900"
}
  



const Navbar = () => {
  return (
    <Header position='static'>
          <Toolbar>
               <Tab to='/' style={LogoStyle}>CloudBlitz Technology</Tab>
               <Tab to='/add'>Add Student</Tab>
               <Tab to='/all'>All Students</Tab>
          </Toolbar>
    </Header>
  )
}

export default Navbar; 
 