"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const ProductContainer = styled.div`
  width: 20rem;
  height: auto;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Name = styled.h2`
  margin-top: 1rem;
`;

const Price = styled.p`
  color: #6e6e6e;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const Button = styled.button`
  margin: 1rem;
`;

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8080/api/products/post";
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {data ? (
        data.map((post, index) => (
          <ProductContainer key={index}>
            <Image
              src={`http://localhost:8080/${post.imagePath}`}
              alt={post.name}
            />
            <ContentContainer>
              <TextContainer>
                <Name>{post.name}</Name>
                <Price>{post.price}</Price>
              </TextContainer>
              <ButtonContainer>
                <Button>Add to cart</Button>
              </ButtonContainer>
            </ContentContainer>
          </ProductContainer>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Page;
