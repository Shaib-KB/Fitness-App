import React from "react";
import { Box, Stack ,Typography } from "@mui/material";

const ExerciseVideos = ({exerciseVideos, name}) => {

    if (!exerciseVideos?.length) return "You don't have access to the exercise videos you need a PAID SUBSCRIPTION!!!";

      return (
    <Box sx={{ marginTop: { lg: "10px", xs: "10px" } }} p="10px">
      <Typography variant="h5" mb="33px">
        Watch videos on <span style={{color:'#ff2625',textTransform: 'capitalize'}}>{name} </span>
      </Typography>
      <Stack justifyContent="flex-start" flexWrap ="wrap" alignItems="center" sx={{
        flexDirection:{lg:'row'},
        gap: { lg: "10px", xs: "0" }
      }}>
        {exerciseVideos?.slice(0,6).map((item,index) =>(
            <a 
             key={index}
             className="exercise-video"
             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
             target="_blank"
             rel="noreferrer"
            >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
