"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

const GloabalStyle = createGlobalStyle`
  a{
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield; /* For Firefox */
  }

  &[type="file"] {
    border: 1px solid gray;
    background-color: #f8f8f8;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 0.25rem;
    width: 40%;
    margin: 0;
  }

  &[type="file"]::file-selector-button {
    display: none;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid lightgray;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: sans-serif;
  border-radius: 0.25rem;
  resize: none;
`;

const Button = styled.button`
  background: white;
  color: black;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  width: 40%;
  &:hover {
    background: #f4f7fa;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProductItem = styled.div`
  flex: 1 0 200px;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  color: black;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Error = styled.h1`
  color: red;
  font-size: medium;
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 1rem;
  height: 2rem;
  width: 4rem;
  background: white;

  &:hover {
    background: #f4f7fa;
  }
`;

const BuildForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const loadProducts = async () => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(products);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", Number(price));
      formData.append("description", description);
      formData.append("image", image);
      formData.append("creator", window.localStorage.getItem("userId"));

      const token = window.localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/api/post",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newProduct = {
        _id: response.data.id,
        name,
        price,
        description,
        image: URL.createObjectURL(image),
      };

      setProducts((prevProducts) => [...prevProducts, newProduct]);

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = window.localStorage.getItem("token");

      await axios.delete(`http://localhost:8080/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Container>
      <GloabalStyle />
      <h1>Build your Garage</h1>
      {error && <Error>{error}</Error>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <FormFooter>
          <Input type="file" onChange={handleImageChange} />
          <Button>Submit</Button>
        </FormFooter>
      </Form>
      <ProductList>
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/build/${product._id}`}>
              <ProductItem>
                {product.name} - {product.description}
              </ProductItem>
            </Link>
            <DeleteButton onClick={() => handleDelete(product._id)}>
              Delete
            </DeleteButton>
          </div>
        ))}
      </ProductList>
    </Container>
  );
};

export default BuildForm;
