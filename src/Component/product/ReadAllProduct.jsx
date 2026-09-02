import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ReadAllProduct = () => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/product",
        method: "GET",
      });
      setProducts(result.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handleDelete = (id) => {
    return async () => {
      try {
        const result = await axios({
          url: `http://localhost:8000/product/${id}`,
          method: "delete",
        });
        toast.success("product deleted");
        getProduct();
      } catch (error) {
        toast.error(error.message);
      }
    };
  };
  return (
    <>
      {products.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid grey 2px" }}>
            <h1>{item.company}</h1>
            <img src={item.productImage} alt="product img"></img>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Featrued : {item.featured ? "yes" : "no"}</p>
            <div>
              <button>View</button>
              <button>Update</button>
              <button onClick={handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReadAllProduct;
