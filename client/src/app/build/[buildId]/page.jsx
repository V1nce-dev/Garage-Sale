"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 2rem;
  width: 100vh;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Text = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
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

        const imageUrl = `http://localhost:8080/api/image/${response.data._id}`;
        const imageResponse = await axios.get(imageUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        });

        const blob = imageResponse.data;
        const imageLocalUrl = URL.createObjectURL(blob);

        setData((prevData) => ({ ...prevData, image: imageLocalUrl }));
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsError(true);
      }
    };

    fetchData();
  }, [params.buildId]);

  return (
    <Container>
      <Title>Details:</Title>
      {isError || !data ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <ContentContainer>
          <TextContent>
            <Text>Name: {data.name}</Text>
            <Text>Price: {data.price}</Text>
            <Text>Description: {data.description}</Text>
          </TextContent>
          {data.image && <Image src={data.image} alt={data.name} />}
        </ContentContainer>
      )}
    </Container>
  );
};
export default Page;
