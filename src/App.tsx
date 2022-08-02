import styled from "styled-components";
import { SinglePage } from "./components/SinglePage"
import GlobalStyle from "./GlobalStyle"

const Container = styled.div`
  max-width: 144rem;
  width: 100%;
  margin: auto;
`;

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <SinglePage />
    </Container>
  )
}


