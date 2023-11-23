export const getMovieList = async () => {
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)

    return {
      results: data.results,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
