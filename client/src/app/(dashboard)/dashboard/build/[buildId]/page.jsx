"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8080/api/post/${params.buildId}`;
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.buildId]);

  return (
    <div>
      {data ? (
        <>
          <h1>name: {data.name}</h1>
          <h1>price: {data.price}</h1>
          <h1>description: {data.description}</h1>
          {data.image && (
            <img
              src={`http://localhost:8080/api/image/${data._id}`}
              alt={data.name}
            />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
