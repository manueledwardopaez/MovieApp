

export const getMovieByName = async ({ name }) => {

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
      `https://api.themoviedb.org/3/search/movie?&query=${name}`,
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
