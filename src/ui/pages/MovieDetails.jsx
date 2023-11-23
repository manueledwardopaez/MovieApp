import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../data/getMovieDetails";
import styled from "styled-components";

const MovieDetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 125px;
  padding-inline: 100px;
  padding-block: 100px;
  block-size: calc(100vh - 120px);
  background-color: #19253b;
  color: white;

  .movieDescription {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-inline-size: 600px;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const { sinopsis, date, poster, title, cast } = await getMovieDetails(
          id
        );
        setMovieDetails({ sinopsis, date, poster, title, cast });
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movieDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <MovieDetailsContainer>
      <div
        className="border border-5 rounded animate__animated  animate__fadeInLeft"
        style={{ width: "272px", height: "408px" }}
      >
        <img
          loading="lazy"
          width="100%"
          height="100%"
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster}`}
          onClick={(e) => {
            console.log(e.target);
          }}
        />
      </div>

      <div className="movieDescription">
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.sinopsis}</p>
        <p> <strong>Cast: </strong>  {movieDetails.cast.slice(0, 5).map((actor) => actor.name).join(' - ')}</p>
        <p> <strong>Release Date:</strong> {movieDetails.date}</p>
      </div> 
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
