

export const getTrailer = async (id) => {

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
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`, options
      );
      const data = await response.json();
  
      // Filtrar solo los trailers de YouTube
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
  
      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}`;
      } else {
        console.log("No se encontró un tráiler.");
        return null;
      }
    } catch (error) {
      console.error("Error obteniendo el tráiler:", error);
    }
  };
  