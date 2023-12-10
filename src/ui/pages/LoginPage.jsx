import styled from "styled-components";
import { LoginForm } from "../components";
import { NavBar } from "../components";
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  block-size: calc(100vh - 120px); 
  background: linear-gradient(66.81deg, #0185ff -1.55%, #36d1dc 101.74%);
  background: #19253b;
  padding-inline: 120px;
  padding-block: 140px;
  @media screen and (max-width: 1000px) {
    padding-inline: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    block-size: auto;
  }
`;

const Introduction = styled.div`
  max-inline-size: 585px;
  color: white;
  h2 {
    font-size: 58px;
    margin-bottom: 15px;
  }

  p {
    font-size: 24px;
  }

  @media screen and (max-width: 800px) {
    max-inline-size: 350px;
  }
`;

export const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Section className="container-fluid ">
        <Introduction className="col-xl-8">
          <h2>Lorem Ipsum is simy text of the printing and typesetting </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </Introduction>

        <LoginForm />
      </Section>
    </>
  );
};
