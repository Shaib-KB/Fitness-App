import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import AiFoodNutrition from "../components/AiFoodNutrition";
import "../App.css";


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
    
        // Fetch Exercise Data
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);
    
        // Fetch Exercise Videos
        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);

        // Fetch target Exercises
        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions);
          setTargetMuscleExercises(targetMuscleExercisesData);

        // Fetch equipment Exercises
        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercise(equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {/* Display Exercise Details */}
      <Detail exerciseDetail={exerciseDetail} />
      
      {/* Display Exercise Videos */}
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      
      {/* Display Similar Exercises */}
      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises} 
      />

      {/* AI Nutrition Recommendation Form */}
      <AiFoodNutrition  prompt={prompt} />
    </Box>
  );
};

export default ExerciseDetail;
