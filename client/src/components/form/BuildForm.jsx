"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  
`

const BuildForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [products, setProducts] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8080/api/post/",
        formData
      );

      const newProduct = {
        _id: response.data.id,
        name,
        price,
        description,
        image: URL.createObjectURL(image),
      };

      setProducts([...products, newProduct]);

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <input type="file" onChange={handleImageChange} />
        <button>do shit</button>
      </form>

      <div>
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/build/${product._id}`}>
              <div>
                {product.name} - {product.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildForm;
