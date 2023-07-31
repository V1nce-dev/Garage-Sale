"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-right: 15rem;
  margin-left: 15rem;
  justify-content: space-around;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 45rem;
  height: 45rem;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: lighter;
  margin-bottom: 1rem;
`;

const Price = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: sans-serif;
  margin: 0.5rem 0;
`;

const Description = styled.p``;

const Page = ({ params }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = `http://localhost:8080/api/products/post/${params.productId}`;
    try {
      const response = await axios.get(url);
      setPost(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={`http://localhost:8080/${post.imagePath}`}
          alt={post.name}
        />
      </ImageContainer>
      <TextContent>
        <Title>{post.name}</Title>
        <Price>${post.price}</Price>
        <Description>{post.description}</Description>
      </TextContent>
    </Container>
  );
};

export default Page;
