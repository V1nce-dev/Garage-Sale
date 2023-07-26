"use client";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      {isError || !data ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>name: {data.name}</h1>
          <h1>price: {data.price}</h1>
          <h1>description: {data.description}</h1>
          {data.image && <img src={data.image} alt={data.name} />}
        </>
      )}
    </div>
  );
};

export default Page;
