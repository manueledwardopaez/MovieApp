import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getMovieList } from "../../data/getMovieList";

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  inline-size: 100%;
  flex-wrap: wrap;
  gap: 50px;
  padding-inline: 80px;

  div {
    inline-size: 272px;
    block-size: 408px;
  }

  div:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 800px) {
    padding-inline: 0;
  }
`;

export const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const { results } = await getMovieList();
        setMovieList(results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <MovieContainer>
      {movieList.map((movie) => (
        <div
          key={movie.id}
          className="border border-5 rounded animate__animated  animate__fadeIn"
        >
          <Link to={`/movielist/${movie.id}`}>
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              onClick={(e) => {
                console.log(e.target);
              }}
              alt={movie.title}
            />
          </Link>
        </div>
      ))}
    </MovieContainer>
  );
};
