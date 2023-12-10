import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = styled.header`
  background: linear-gradient(66.81deg, #0185ff -1.55%, #36d1dc 101.74%);
  block-size: 120px;
  color: white;

  .logo {
    font-size: 40px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    .logo {
      font-size: 24px;
    }
  }
`;

export const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Header className="d-flex justify-content-between align-items-center px-4">
      <Link className="m-0 logo" to="/">
        MovieApp
      </Link>

      {currentPath !== "/" && (
        <div>
          <Link to="/movieList">Catalgue</Link>

          <Link className="mx-4" to="/search">
            Search
          </Link>
        </div>
      )}
    </Header>
  );
};
