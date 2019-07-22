import React from "react"

import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap');

  body, html{
    font-family: 'Roboto', sans-serif;
    margin: 0 !important;
    padding: 0 !important;

  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
