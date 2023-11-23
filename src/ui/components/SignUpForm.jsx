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
  min-block-size: 452px; 
  input::placeholder {
    opacity: .5;
  }

  h2 {
    margin-bottom: 54px;
  }

   @media screen and (max-width: 800px) {
    max-inline-size: 350px
  
  }
`;

export const SignUpForm = () => {
    return (
        <Form className="col-xl-8">
        <h2>Sign Up</h2>
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
          <input
          type="text"
          className="form-control mb-3"
          placeholder="DNI"
        />
           <input
          type="text"
          className="form-control mb-3"
          placeholder="Address"
        />
           <input
          type="tel"
          className="form-control mb-3"
          placeholder="Phone Number"
        />
        <Link to="/movielist" className="btn btn-primary mb-4 w-100">
          Sign Up
        </Link>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </Form>
    )
}

