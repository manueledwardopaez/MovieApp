
import { SignUpForm } from "../components"
import styled from "styled-components";

const SignUpContainer = styled.div `
  display: flex;
  justify-content: center;
  background: linear-gradient(66.81deg, #0185FF -1.55%, #36D1DC 101.74%);
  padding-block: 120px;
`

export const SignUpPage = () => {
  return (
    <SignUpContainer >
      <SignUpForm/>
    </SignUpContainer>
  )
}

