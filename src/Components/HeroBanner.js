import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BannerImage from "../assets/images/home.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mt="-70px">
        Exercise Paradise
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#FF2625',padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color='#ff2625' sx={{opacity: 0.1, display: {lg:'block', xs:'none'}}} fontSize='200px' mt="-180px" letterSpacing= '0.2em'>
        Exercise
      </Typography>
      <img src={BannerImage} className="hero-banner-img" mb="-30px" />
    </Box>
  );
};

export default HeroBanner;
