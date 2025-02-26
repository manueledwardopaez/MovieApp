import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #19253b;
  color: white;
  font-size: 2rem;
`;

export const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <h1>Oops! Looks like this page does not exist</h1>
    </NotFoundPageStyled>
  );
};
