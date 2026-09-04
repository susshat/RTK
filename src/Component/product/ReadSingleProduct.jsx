import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadSingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "get",
      });
      console.log(result.data.result);
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleBack = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>{product.company}</h1>
      <img src={product.productImage} alt="product img"></img>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Featrued : {product.featured ? "yes" : "no"}</p>
      <button onClick={handleBack}>back</button>
    </>
  );
};

export default ReadSingleProduct;
