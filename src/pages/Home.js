import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');


  return (
    <Box>
      <HeroBanner />
      <SearchExercises setBodyPart={setBodyPart} setExercises={setExercises} bodyPart={bodyPart}/>
      <Exercises setBodyPart={setBodyPart} setExercises={setExercises} bodyPart={bodyPart}/>
    </Box>
  );
};

export default Home;
