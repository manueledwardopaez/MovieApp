import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 16px;
  padding-block: 40px;
  background-color: white;
  border-radius: 10px;
  max-inline-size: 360px;
  max-block-size: 452px;


  h2 {
    margin-bottom: 54px;
  }

  @media screen and (max-width: 800px) {
    max-inline-size: 350px;
  }
`;

export const LoginForm = () => {
  return (
    <Form className="col-xl-8">
      <h2>Login</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email Address"
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <a href="#" className="align-self-end mb-4">
        Forgot your password?
      </a>
      <Link to="/movieList" className="btn btn-primary mb-4 w-100">
        Login
      </Link>
      <p>
        Need to create an account? <Link to="/signUp">Sign Up</Link>
      </p>
    </Form>
  );
};
