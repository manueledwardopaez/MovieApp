import styled from "styled-components";
import { Link } from "react-router-dom";

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
  .link {
  font-size: 1.4rem;
  display: inline-block;
  transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    color: #19253b;
  }

  &:active {
    transform: scale(0.95);
  }
}


  @media screen and (max-width: 800px) {
    .logo {
      font-size: 24px;
    }

   

    .home {
      display: none;
    }
  }
`;

export const NavBar = () => {
  return (
    <Header className="d-flex justify-content-between align-items-center px-4">
      <Link className="m-0 logo" to="/">
        MovieApp
      </Link>

      <div>
        <Link className="link home" to="/">
          Home
        </Link>

        <Link className="mx-4 link" to="/search">
          Search
        </Link>
      </div>
    </Header>
  );
};
