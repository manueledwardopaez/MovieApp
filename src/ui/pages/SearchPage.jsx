import styled from "styled-components";
import { getMovieByName } from "../../data/getMovieByName";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #19253b;
  color: white;
  padding-block: 80px;
  padding-inline: 30px;
  min-height: 100vh;
  block-size: 100%;

  h1 {
    margin-block-end: 40px;
  }

  form {
    display: flex;
    gap: 15px;
    align-items: center;
    max-inline-size: 500px;
    margin-block-end: 40px;
  }

  button {
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    padding-inline: 0;
  
    form {
      flex-direction: column;
      margin-inline: 12px;
    }
  }
`;

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

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  const [movieList, setMovieList] = useState([]);
  const [movieName, setMovieName] = useState(query);

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]); 

  const fetchMovies = async (name) => {
    try {
      const { results } = await getMovieByName({ name });
      setMovieList(results || []);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setMovieList([]);
    }
  };

  const onInputChange = ({ target }) => {
    setMovieName(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`?query=${movieName}`);
    fetchMovies(movieName);
  };

  return (
    <>
      <NavBar />
      <SearchContainer>
        <h1 className="text-center">Search a Movie</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search a Movie"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={movieName}
            onChange={onInputChange}
          />
          <button className="btn btn-outline-primary">Search</button>
        </form>

        {movieList.length === 0 && query && <p>No se encontraron resultados.</p>}

        <MovieContainer>
          {movieList.map((movie) => (
            <div key={movie.id} className="border border-5 rounded animate__animated animate__fadeIn">
              <Link to={`/search/${movie.id}`}>
                <img
                  loading="lazy"
                  width="100%"
                  height="100%"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </MovieContainer>
      </SearchContainer>
    </>
  );
};
