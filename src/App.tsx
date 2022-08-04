import styled from "styled-components";
import { SinglePage } from "./components/SinglePage"
import GlobalStyle from "./GlobalStyle"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SinglePage />
    </>
  )
}