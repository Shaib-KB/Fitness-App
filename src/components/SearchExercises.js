import React, {useEffect,useState} from "react";
import {Box, Button,Stack,TextField,Typography} from '@mui/material'

const SearchExercises = () => {
  return (
  <Stack alignment="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} 
      mb="50px" textAlign="center">
      Awesome exercises you <br/> should know
    </Typography>
    <Box position="relative" mb="72px">

       <TextField  
       sx={{
        input:{
          fontWeight:'700',
          border:'none',
          borderRadius: '4px'
         },
         width:{lg:'800px',xs:'350px'},
         backgroundColor:'#FFFFFF',
         borderRadius:'40px'
         }}
         height="76px"
         value=""
         onChange={(e)=>{}}
         placeholder="Search Exercises"
         type="text"
      />
      <Button className="search-btn"
       sx={{
        bgcolor:'#FF2625',
        color:'#fff',
        textTransform:'none',
        width:{lg:'175px',xs:'80px'},
        fontSize:{lg:'20px',xs:'14px'},
        height:'56px',
        position:"absolute",
        
        }}>
        Search
      </Button>
    </Box>
  </Stack>);
};

export default SearchExercises;
