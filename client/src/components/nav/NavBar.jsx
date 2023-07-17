import UserIsLoggedIn from "../home/UserLoggedIn";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  background: {
    primary: "#f3f3f3",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 20px;
`;

const Home = styled.a`
    color: black;
    text-decoration: none;
    font-size: larger;
`;

const IsnotLoggedIn = styled.a`
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  background: white;
  &:hover {
    background: #f3f3f3;
  }
`;

const IsLoggedIn = styled.a`
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  background: white;
  &:hover {
    background: #f3f3f3;
  }
`;

const NavBar = () => {
  const UserLoggedIn = UserIsLoggedIn();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav>
        <Home href="/">Garage Sale</Home>
        {UserLoggedIn ? (
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
