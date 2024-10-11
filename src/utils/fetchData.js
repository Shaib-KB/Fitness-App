// API options
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, // Keep this secure
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

// Fetch data function with error handling
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};
