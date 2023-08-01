"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const GlobalStyled = createGlobalStyle`
  h1 {
    font-family: sans-serif;
  }
`;

const Image = styled.img`
  width: 45rem;
  height: 45rem;
  border-radius: 10px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding-left: 5rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  word-break: break-word;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background: #ddd;
`;

const Price = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 12px 25px;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s all ease-out;

  &:hover {
    background: #f4f7fa;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

const Description = styled.h1`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  word-break: break-word;
`;

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
      <GlobalStyled />
      <Image src={`http://localhost:8080/${post.imagePath}`} alt={post.name} />
      <ProductContent>
        <Title>{post.name}</Title>
        <Line />
        <Price>Price: ${post.price}</Price>
        <Button>Add to Cart</Button>
        <Line />
        <DescriptionContainer>
          <Description>{post.description}</Description>
        </DescriptionContainer>
      </ProductContent>
    </Container>
  );
};

export default Page;
