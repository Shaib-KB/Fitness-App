import React, {useEffect,useState} from "react" ;
import {Box, Button,Stack,TextField,Typography} from '@mui/material';
import {fetchData, exerciseOptions} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
   const [search, setSearch] = useState('')
   const [bodyParts, setBodyParts] = useState([])
  


   useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts data:", error);
      }
    };

    fetchExercisesData();
  }, []);

  // Handle search functionality
  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchExercises);
        // Scroll down to the bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,  // scroll to the bottom
        behavior: 'smooth',  // smooth scrolling effect
      });
      } catch (error) {
        console.error("Error fetching exercises data:", error);
      }
    }
  };


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
         value={search}
         onChange={(e)=>setSearch(e.target.value.toLowerCase())}
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
        
        }}
        onClick={handleSearch} >
        Search
      </Button>
    </Box>
    <Box sx={{position:'relative',width:'100%',p:'20px'}}>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
    </Box>
  </Stack>)
}

export default SearchExercises;
