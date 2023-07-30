"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const ProductContainer = styled.div`
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Name = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: sans-serif;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #f3f3f3;
  color: black;
  border: none;
  padding: 10px 20px;
  border-top-left-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background: black;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
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
            <Overlay>
              <DetailsContainer>
                <Name>{post.name}</Name>
                <Price>{post.price}</Price>
              </DetailsContainer>
              <ButtonContainer>
                <Button>Add to cart</Button>
              </ButtonContainer>
            </Overlay>
          </ProductContainer>
        ))
      ) : (
        <LoadingText>Loading...</LoadingText>
      )}
    </Container>
  );
};

export default Page;
