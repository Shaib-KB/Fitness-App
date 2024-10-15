import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log( "data", exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // Function for the next page  
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

 // Fetch exercises when the bodyPart or component changes for the cards
useEffect(() => {
  const fetchExercisesData = async () => {
    try {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    } catch (error) {
      console.error("Error fetching exercises data:", error);
    }
  };

  fetchExercisesData();
}, [bodyPart, setExercises]);


  return (
    <Box id="exercises" sx={{ mt: { lg: "0px" } }} mt="50px" p="20px">
      <Typography variant="h5" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", xs: "30px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Exercises;
