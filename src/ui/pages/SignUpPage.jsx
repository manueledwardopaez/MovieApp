import { SignUpForm } from "../components";
import styled from "styled-components";
import { NavBar } from "../components";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(66.81deg, #0185ff -1.55%, #36d1dc 101.74%);
  padding-block: 120px;
`;

export const SignUpPage = () => {
  return (
    <>
      <NavBar />
      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </>
  );
};
