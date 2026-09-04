import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ReadAllProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
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
      // try {
      //   const result = await axios({
      //     url: `http://localhost:8000/product/${id}`,
      //     method: "delete",
      //   });
      //   toast.success("product deleted");
      //   getProduct();
      // } catch (error) {
      //   toast.error(error.message);
      // }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async () => {
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
        // if (result.isConfirmed)
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success",
        //   });
      });
    };
  };
  const handleView = (id) => {
    return () => {
      navigate(`/products/${id}`);
    };
  };
  const handleUpdate = (id) => {
    return () => {
      navigate(`/products/update/${id}`);
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
              <button onClick={handleView(item.id)}>View</button>
              <button onClick={handleUpdate(item.id)}>Update</button>
              <button onClick={handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReadAllProduct;
