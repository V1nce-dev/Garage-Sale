"use client";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const theme = {
  background: {
    primary: "#f3f3f3",
    default: "#fff",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.primary};
    overflow: hidden;
  }
`;

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 25rem;
  width: 25rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background.default};
`;

const Signup = styled.h1`
  font-size: large;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  margin: 0%;
`;

const Line = styled.hr`
  border: 1px solid black;
  width: 100%;
  margin: 0%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 25px;
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 3px;
  padding: 5px;
  width: 20rem;
  font-size: medium;
`;

const SignupButton = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
  width: 21rem;
  font-size: medium;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.2s all ease-out;
  background: white;
  color: black;
  &:hover {
    background: #f3f3f3;
  }
`;

const AccountButton = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
  font-size: medium;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.2s all ease-out;
  background: white;
  color: black;
  &:hover {
    background: #f3f3f3;
  }
`;

const Error = styled.h1`
  color: red;
  font-size: medium;
  font-weight: 100;
  min-height: 2rem;
  text-align: center;
`;

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/register/",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUsername("");
      setPassword("");
      router.push("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Outer>
        <div>
          <Container>
            <Signup>Sign Up</Signup>
            <Line />
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
               <SignupButton type="submit" >
            Sign up
          </SignupButton>
            </Form>
            <Error>{error ? error.message : " "}</Error>
          </Container>
          <AccountButton onClick={() => router.push("/login")}>Have an account Login.</AccountButton>
        </div>
      </Outer>
    </ThemeProvider>
  );
};

export default RegisterForm;
