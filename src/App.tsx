import styled from "styled-components";
import { SinglePage } from "./components/SinglePage"
import GlobalStyle from "./GlobalStyle"

const Container = styled.div`
  width: 100%;
`;
export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <SinglePage />
    </Container>
  )
}


