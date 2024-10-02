import React from "react";
import { Box, stack, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      px="20px" >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography >
      <Typography fontWeight="600" sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight="25" LineHeight="35px" mb = {3}>Check out the most effective exercises</Typography>
      <Button variant="contained" color="error">
      Explore Exercises
      </Button>
    </Box>
    
  );
};

export default HeroBanner;
