import styled from "styled-components";

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
`;

export const NavBar = () => {
  return (
    <Header className="d-flex justify-content-between align-items-center px-4">
      <a className="m-0 logo" href="/">
        MovieApp
      </a>

      <div className="">
        <a href="/movieList">Catalgue</a>

        <a className="mx-4" href="/search">
          Search
        </a>
      </div>

      {/*     <div className="dropdown userMenu">
        
        <button
          className="btn btn-primary dropdown-toggle "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="/public/assets/avatar.jpg" alt="User Image" width="28" height="28" className="rounded rounded-4a pl-4" />
          John Doe
        </button>

        <ul className="dropdown-menu">
          <li>
            <a href="/" className="dropdown-item" >
              Logout
            </a>
          </li>
        </ul>
      </div> */}
    </Header>
  );
};
