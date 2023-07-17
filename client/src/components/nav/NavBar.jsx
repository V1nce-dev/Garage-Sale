import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  background: {
    primary: "#f3f3f3",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-left: 15rem;
    margin-right: 15rem;
    background-color: ${({ theme }) => theme.background.primary};
    font-family: 'Ubuntu', sans-serif;

  }
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 2em;
  z-index: 9999;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const Home = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  font-size: larger;
  font-weight: 900;
  align-items: center;
`;

const HomeIcon = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  & > path {
    stroke: black !important;
    stroke-width: 1.5;
    stroke-linecap: round;
    fill: none;
  }
`;

const Product = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s all ease-out;
  &:hover {
    background: #f4f7fa;
  }
`;
const Organize = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s all ease-out;
  &:hover {
    background: #f4f7fa;
  }
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
  background: white;
  transition: 0.2s all ease-out;
  height: 30px;
  line-height: 30px;
  width: 5rem;
  text-align: center;
  &:hover {
    background: #f4f7fa;
  }
`;

const IsnotLoggedIn = styled(Button)``;

const IsLoggedIn = styled(Button)``;

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <LoadingScreen>Loading...</LoadingScreen>;
  }

  return (
    <ThemeProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <GlobalStyle />
      <Nav>
        <Home href="/">
          <HomeIcon>
            {" "}
            <path d="M22 22L2 22"></path>{" "}
            <path d="M3 22.0001V11.3472C3 10.4903 3.36644 9.67432 4.00691 9.10502M21 22.0001V16M7.25345 6.2192L10.0069 3.77169C11.1436 2.76133 12.8564 2.76133 13.9931 3.77169L19.9931 9.10502C20.6336 9.67432 21 10.4903 21 11.3472V12"></path>{" "}
            <path d="M9 18.5H15"></path>{" "}
            <path d="M6 22V19M18 22V16C18 14.1144 18 13.1716 17.4142 12.5858C16.8284 12 15.8856 12 14 12H10C8.11438 12 7.17157 12 6.58579 12.5858C6.11424 13.0573 6.02228 13.7602 6.00434 15"></path>{" "}
            <path d="M10 9H10.5M14 9H12.5"></path>{" "}
            <path d="M9 15.5H10.5M15 15.5H12.5"></path>{" "}
          </HomeIcon>
          <div>Garage Sale</div>
        </Home>
        <Product href="/product">Products</Product>
        <Organize href="/build">Organize Your Own</Organize>
        {isLoggedIn ? (
          <IsLoggedIn href="/login" onClick={handleLogout}>
            Logout
          </IsLoggedIn>
        ) : (
          <IsnotLoggedIn href="/login">Login</IsnotLoggedIn>
        )}
      </Nav>
    </ThemeProvider>
  );
};

export default NavBar;
