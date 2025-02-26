export const getMovieDetails = async (id) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`,
      options
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return {
      sinopsis: data.overview,
      date: data.release_date,
      poster: data.poster_path,
      title: data.title,
      cast: data.credits.cast,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
