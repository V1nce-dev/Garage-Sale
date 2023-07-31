"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 2rem;
  width: 60rem;
  height: 30rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const Text = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.1em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 0;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const LoadingText = styled.p`
  font-size: 1.5em;
  color: #999;
`;

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8080/api/post/${params.buildId}`;

      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [params.buildId]);

  return (
    <Container>
      {isError || !data ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <ImageContainer>
            {data.imagePath && (
              <Image
                src={`http://localhost:8080/${data.imagePath}`}
                alt={data.name}
              />
            )}
          </ImageContainer>
          <TextContent>
            <Text>Name: {data.name}</Text>
            <Text>Price: ${data.price}</Text>
            <Text>Description: {data.description}</Text>
          </TextContent>
        </>
      )}
    </Container>
  );
};
export default Page;
