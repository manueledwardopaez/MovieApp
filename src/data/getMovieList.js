export const getMovieList = async () => {

  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      API_KEY,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      results: data.results,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
