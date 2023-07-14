"use client";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  height: 30rem;
  width: 25rem;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 20px;
  text-align: center;
`;

const Text = styled.h1`
  font-size: ${({ $variant }) => ($variant === "small" ? "1rem" : "3rem")};
  margin-bottom: ${({ $variant }) => ($variant === "signup" ? "0px" : "20px")};
  font-weight: 100;
`;

const Span = styled.span`
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px;
  width: 15rem;
  font-size: medium;
`;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 5px;
  font-size: medium;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.2s all ease-out;
  background: #6834ec;
  color: white;
  &:hover {
    background: #8b5eeb;
  }
`;

const Error = styled.h1`
  color: red;
  font-size: medium;
  font-weight: 100;
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
    <Container>
      <TextContainer>
        <Text $variant="signup">Sign Up</Text>
        <Text $variant="small">
          Already have an account{" "}
          <Span onClick={() => router.push("/login")}>Login</Span>
        </Text>
      </TextContainer>
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
        <Button $variant="outline">Register</Button>
      </Form>
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};

export default RegisterForm;
