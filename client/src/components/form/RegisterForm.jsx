"use client";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 12px;
  height: 40rem;
  width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 4px;
  width: 15rem;
  font-size: medium;
`;

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        },
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </Container>
  );
};

export default RegisterForm;
