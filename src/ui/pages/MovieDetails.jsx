import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../data/getMovieDetails";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components";

const MovieDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 80px;
  block-size: calc(100vh - 120px);
  background-color: #19253b;
  color: white;

  .infoContainer {
    display: flex;
    justify-content: center;
    gap: 125px;
  }

  .movieDescription {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-inline-size: 600px;
  }

  .movieDescription button {
    inline-size: 150px;
  }

  .backButton {
    inline-size: 130px;
    margin-inline-start: 30px;
  }

  @media screen and (max-width: 800px) {
    block-size: auto;

    .infoContainer {
      flex-direction: column;
      align-items: center;
      padding-inline: 30px;
      gap: 24px;
    }

    .movieDescription {
      gap: 12px;
    }

    .movieDescription button {
      inline-size: 100%;
    }

    .navigateBack {
      margin-block-start: 100px;
    }

    /*  .rentMovie {
      inline-size: 100%;
    } */
  }
`;

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const navigateBack = () => {
    // Navegar hacia atrás
    navigate(-1);
  };

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
    <>
      <NavBar />
      <MovieDetailsContainer>
        <div className="infoContainer">
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
            <p>
              <strong>Cast: </strong>
              {movieDetails.cast
                .slice(0, 5)
                .map((actor) => actor.name)
                .join(" - ")}
            </p>
            <p>
              <strong>Release Date:</strong> {movieDetails.date}
            </p>
            <button className="rentMovie btn btn-primary rounded-4 ">
              <strong>Rent</strong>
            </button>
          </div>
        </div>

        <div className="navigateBack">
          <button
            onClick={() => {
              navigateBack();
            }}
            className="btn btn-primary backButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Back
          </button>
        </div>
      </MovieDetailsContainer>
    </>
  );
};

export default MovieDetails;
