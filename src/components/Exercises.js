import React, {useEffect, useState} from "react";
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from "@mui/material";
import {fetchData, exerciseOptions} from '../utils/fetchData';


const Exercises = ({exercises,setExercises,bodyPart}) => { 
  console.log("data", exercises); 
  
  return (
  <Box id="exercises"
   sx={{mt:{lg:'110px'}}}
   mt="50px"
   p="20px"
  >
    <Typography variant="h3" mb="46px" >Showing results</Typography>
    <Stack direction="row" sx={{gap:{lg:'110px',sx:'50px'}}} flexWrap="wrap" justifyContent="center">
      {exercises.map((exercise, index)=>(<p>{exercise.name}</p>))}

    </Stack>
 </Box>
)
}

export default Exercises;
