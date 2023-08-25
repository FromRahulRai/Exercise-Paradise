import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'122px', xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px'>
      <Link to='/'>
    <img src={Logo} alt="Logo" style={{width: "48px", height: "48px", margin: "0 20px"}}/>
      </Link>
      <Stack
      direction='row' gap='40px' fontSize='24px' alignItems='center'>
        <Link to='/' style={{textDecoration: 'none', color: "whitesmoke",borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: "whitesmoke"}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
