export const getMovieByName = async ({name}) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2QwMmUwOTlhY2ZjMDc1NjU0Mjk4NjUyYzg1NjgwZiIsInN1YiI6IjY1NWJmZGViMTA5MjMwMDEzOGM3YmU2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx6u9aWgDnBo64w3Of8LUdM2UBEoei7YTg2ojVqkQTY",
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
    console.log(data.results);

    return {
      results: data.results,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
