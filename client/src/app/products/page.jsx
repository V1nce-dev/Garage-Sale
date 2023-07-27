"use client";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      {data ? (
        data.map((post, index) => (
          <div key={index}>
            <h2>{post.name}</h2>
            <p>{post.price}</p>
            <img
              src={`http://localhost:8080/api/image/${post._id}`}
              alt={post.name}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
