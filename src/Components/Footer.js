import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <Box mt="50px" bgcolor="#121717" height='100px'>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
    </Stack>
    
  </Box>
);

export default Footer;